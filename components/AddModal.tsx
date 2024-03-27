import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { Resolver, useForm } from 'react-hook-form'

import React from 'react'

interface AddModalProps {
	show: boolean
	handleClose: () => void
}

type FormValues = {
	taskName: string
	taskDescription: string
}

const resolver: Resolver<FormValues> = async (values) => {
	const errors: Record<string, { type: string; message: string }> = {}
	if (!values.taskName) {
		errors.taskName = {
			type: 'required',
			message: 'Görev adı zorunludur.'
		}
	}
	if (!values.taskDescription) {
		errors.taskDescription = {
			type: 'required',
			message: 'Görev açıklaması zorunludur.'
		}
	}
	return {
		values: values.taskName && values.taskDescription ? values : {},
		errors: errors
	}
}

const AddModal: React.FC<AddModalProps> = ({ show, handleClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({ resolver })

	const onSubmit = handleSubmit((data) => console.log(data))

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header>
				<Modal.Title>Görev Ekle</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={onSubmit}>
					<Form.Group className="mb-3">
						<FloatingLabel label="Görev Adı">
							<Form.Control
								type="text"
								placeholder="Görev Adı"
								isInvalid={!!errors.taskName}
								{...register('taskName')}
							/>
							<Form.Control.Feedback type="invalid">{errors.taskName?.message}</Form.Control.Feedback>
						</FloatingLabel>
					</Form.Group>
					<Form.Group className="mb-3">
						<FloatingLabel label="Görev Açıklaması">
							<Form.Control
								as="textarea"
								placeholder="Görev Açıklaması"
								style={{ height: '100px' }}
								isInvalid={!!errors.taskDescription}
								{...register('taskDescription')}
							/>
							<Form.Control.Feedback type="invalid">{errors.taskDescription?.message}</Form.Control.Feedback>
						</FloatingLabel>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={handleClose}>
					İptal
				</Button>
				<Button variant="primary" type="submit" onClick={onSubmit}>
					Oluştur
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddModal
