import { Button, Col, Form, Row } from 'react-bootstrap'

import { useRouter } from 'next/navigation'

const Header = () => {
	const router = useRouter()
	return (
		<Row className="w-100 flex-column flex-md-row align-items-center mb-md-2 mb-3">
			<Col md={3}>
				<h1>Görevler</h1>
			</Col>
			<Col md={6} className="d-flex justify-content-center align-items-center gap-2">
				<Form.Control type="text" placeholder="Ara..." />
				<Button variant="primary" className="ml-2 bg-gradient">
					Ara
				</Button>
			</Col>
			<Col md={3}>
				<Button variant="success" onClick={() => router.push('/todo/add')} className="w-100 mt-3 mt-md-0 bg-gradient">
					Görev Ekle
				</Button>
			</Col>
		</Row>
	)
}

export default Header
