'use client'

import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useParams, useRouter } from 'next/navigation'

import { ITodo } from '@/components/tabsNavigation/models/ITodo'
import db from '@/app/firebaseConfig'
import { useForm } from 'react-hook-form'

interface TodoFormValues {
	name: string
	description: string
	isCompleted: boolean
}

const TodoEdit = () => {
	const { register, handleSubmit, setValue } = useForm<TodoFormValues>()
	const router = useRouter()
	const { id } = useParams()

	useEffect(() => {
		const fetchTodo = async (id: string) => {
			const todoRef = doc(db, 'todos', id)
			const todoSnap = await getDoc(todoRef)
			if (todoSnap.exists()) {
				const todoData = todoSnap.data() as ITodo
				setValue('name', todoData.name)
				setValue('description', todoData.description)
				setValue('isCompleted', todoData.isCompleted)
			} else {
				console.error('Todo not found')
			}
		}

		if (id) {
			fetchTodo(id as string)
		}
	}, [id, setValue])

	const onSubmit = async (data: TodoFormValues) => {
		if (id) {
			const todoRef = doc(db, 'todos', id as string)
			await updateDoc(todoRef, data)
			router.push('/')
		}
	}

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Düzenleme</h1>
			<Row className="w-100 justify-content-center align-items-center mt-2">
				<Col md={6}>
					<Form>
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
							<Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
								Kaydet
							</Button>
							<Button variant="danger" onClick={() => router.push('/')}>
								Vazgeç
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default TodoEdit
