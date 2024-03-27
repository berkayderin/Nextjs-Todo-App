import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'

const CardItem: React.FC = () => {
	return (
		<Card>
			<ListGroup variant="flush">
				<ListGroup.Item>
					<Row>
						<Col md={8} className="fw-semibold">
							Görev Adı 1
						</Col>
						<Col md={4} className="d-flex justify-content-end align-items-center">
							<FiEye className="me-2" style={{ cursor: 'pointer' }} title="Detay" />
							<FiEdit className="me-2" style={{ cursor: 'pointer' }} title="Düzenle" />
							<FiTrash style={{ cursor: 'pointer' }} title="Sil" />
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	)
}

export default CardItem
