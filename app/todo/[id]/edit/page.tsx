'use client'

import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

import axios from 'axios'
import { sendToast } from '@/hooks/useCustomToast'
import { useForm } from 'react-hook-form'

interface TodoFormValues {
	id: any
	name: string
	description: string
	isCompleted: boolean
	createdAt: string
}

const TodoEdit = () => {
	const { register, handleSubmit, setValue } = useForm<TodoFormValues>()
	const router = useRouter()
	const { id } = useParams()

	useEffect(() => {
		const fetchTodo = async (id: any) => {
			try {
				const response = await axios.get(`/api/todos/${id}`)
				if (response.data) {
					const todoData = response.data as TodoFormValues
					setValue('name', todoData.name)
					setValue('description', todoData.description)
					setValue('isCompleted', todoData.isCompleted)
				}
			} catch (error) {
				console.error('Todo not found', error)
			}
		}

		if (id) {
			fetchTodo(id as any)
		}
	}, [id, setValue])

	const onSubmit = async (data: TodoFormValues) => {
		try {
			const response = await axios.put(`/api/todos/${id}`, data)
			sendToast(response.data.message, true)
			router.push('/')
		} catch (error) {
			console.error('Görev güncelleme hatası.', error)
			sendToast('Görev güncelleme sırasında bir hata oluştu.', false)
		}
	}

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Düzenleme</h1>
			<Row className="w-100 justify-content-center align-items-center mt-2">
				<Col md={6}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group className="mb-3">
							<FloatingLabel label="Görev Adı">
								<Form.Control type="text" placeholder="Görev Adı" {...register('name')} />
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3">
							<FloatingLabel label="Görev Açıklaması">
								<Form.Control
									as="textarea"
									placeholder="Görev Açıklaması"
									style={{ height: '100px' }}
									{...register('description')}
								/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Görev Durumu</Form.Label>
							<Form.Check type="switch" id="isCompleted" label="Tamamlandı mı?" {...register('isCompleted')} />
						</Form.Group>
						<Form.Group className="d-flex justify-content-end gap-2">
							<Button variant="danger" onClick={() => router.push('/')}>
								Vazgeç
							</Button>
							<Button variant="primary" type="submit">
								Kaydet
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default TodoEdit
