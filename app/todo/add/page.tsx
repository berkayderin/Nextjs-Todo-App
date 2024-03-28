'use client'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { Resolver, useForm } from 'react-hook-form'

import axios from 'axios'
import { sendToast } from '@/hooks/useCustomToast'
import { useRouter } from 'next/navigation'

interface FormValues {
	name: string
	description: string
}

const resolver: Resolver<FormValues> = async (values) => {
	const errors: Record<string, { type: string; message: string }> = {}
	if (!values.name) {
		errors.name = {
			type: 'required',
			message: 'Görev adı zorunludur.'
		}
	}
	if (!values.description) {
		errors.description = {
			type: 'required',
			message: 'Görev açıklaması zorunludur.'
		}
	}
	return {
		values: values.name && values.description ? values : {},
		errors: errors
	}
}

const AddTodoPage = () => {
	const router = useRouter()
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({ resolver })

	const handleSave = async (data: FormValues) => {
		try {
			const respose = await axios.post('/api/todos', data)
			sendToast(respose.data.message, true)
			router.push('/')
			reset()
		} catch (error) {
			sendToast('Bir hata oluştu!', false)
			console.error('Error:', error)
		}
	}

	return (
		<div className="container mt-5">
			<h1>Görev Ekle</h1>
			<Form>
				<Form.Group className="mb-3">
					<FloatingLabel label="Görev Adı">
						<Form.Control type="text" placeholder="Görev Adı" isInvalid={!!errors.name} {...register('name')} />
						<Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="mb-3">
					<FloatingLabel label="Görev Açıklaması">
						<Form.Control
							as="textarea"
							placeholder="Görev Açıklaması"
							style={{ height: '100px' }}
							isInvalid={!!errors.description}
							{...register('description')}
						/>
						<Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="d-flex justify-content-end gap-2">
					<Button variant="danger" onClick={() => router.back()}>
						İptal
					</Button>
					<Button variant="primary" type="submit" onClick={handleSubmit(handleSave)}>
						Oluştur
					</Button>
				</Form.Group>
			</Form>
		</div>
	)
}

export default AddTodoPage
