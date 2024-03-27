import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { Resolver, useForm } from 'react-hook-form'

import React from 'react'
import Service from '@/global/Service'
import { sendToast } from '@/global/sendToast'

interface AddModalProps {
	show: boolean
	handleClose: () => void
}

type FormValues = {
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

const AddModal: React.FC<AddModalProps> = ({ show, handleClose }) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({ resolver })

	const handleSave = async (data: FormValues) => {
		try {
			const respose = await Service.post('/task', data)
			sendToast(respose.data.message, true)
			reset()
			handleClose()
		} catch (error) {
			sendToast('Bir hata oluştu!', false)
			console.error('Error:', error)
		}
	}

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header>
				<Modal.Title>Görev Ekle</Modal.Title>
			</Modal.Header>
			<Modal.Body>
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
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={handleClose}>
					İptal
				</Button>
				<Button variant="primary" type="submit" onClick={handleSubmit(handleSave)}>
					Oluştur
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddModal
