'use client'

import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

import { useRouter } from 'next/navigation'

const TodoEdit = () => {
	const router = useRouter()
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Düzenleme</h1>
			<Row className="w-100 justify-content-center align-items-center mt-2">
				<Col md={6}>
					<Form>
						<Form.Group className="mb-3">
							<FloatingLabel label="Görev Adı">
								<Form.Control type="text" placeholder="Görev Adı" />
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3">
							<FloatingLabel label="Görev Açıklaması">
								<Form.Control as="textarea" placeholder="Görev Açıklaması" style={{ height: '100px' }} />
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Check type="checkbox" label="Görev Tamamlandı mı?" />
						</Form.Group>
						<Form.Group className="d-flex justify-content-end gap-2">
							<Button variant="primary" type="submit">
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
