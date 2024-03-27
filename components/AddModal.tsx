import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { Resolver, useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'

import React from 'react'
import db from '@/app/firebaseConfig'
import { toast } from 'react-toastify'

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

	const onSubmit = handleSubmit((data) => {
		console.log(data)
		try {
			addDoc(collection(db, 'tasks'), {
				name: data.name,
				description: data.description,
				createdAt: new Date()
			})
			toast.success('Görev başarıyla eklendi!')
			handleClose()
			reset()
		} catch (error) {
			console.error('Error adding document: ', error)
			toast.error('Görev eklenirken bir hata oluştu.')
		}
	})

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
				<Button variant="primary" type="submit" onClick={onSubmit}>
					Oluştur
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddModal
