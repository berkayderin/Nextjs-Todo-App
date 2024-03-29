import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'

import { ITodos } from '@/models/ITodos'
import Service from '@/utils/Service'
import { sendToast } from '@/hooks/useCustomToast'
import { useRouter } from 'next/navigation'

const TodoList = ({ data, onDelete }: { data?: ITodos[]; onDelete: (id: string) => void }) => {
	const router = useRouter()

	const handleDelete = async (id: string) => {
		try {
			await Service.delete(`/todos/${id}`)
			onDelete(id)
			sendToast('Görev başarıyla silindi.', true)
		} catch (error) {
			console.log('delete error: ', error)
		}
	}

	const sortedData = data?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
	return (
		<Card>
			<ListGroup variant="flush">
				{sortedData?.map((todo) => (
					<ListGroup.Item key={todo.id}>
						<Row>
							<Col>
								<span className="fw-semibold me-1">Görev:</span>
								{todo.name}
							</Col>
							<Col className="d-flex justify-content-end align-items-center gap-2">
								<FiEye className="mr-2" style={{ cursor: 'pointer' }} onClick={() => router.push(`/todo/${todo.id}`)} />
								<FiEdit
									className="mr-2"
									style={{ cursor: 'pointer' }}
									onClick={() => router.push(`/todo//${todo.id}/edit`)}
								/>
								<FiTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(todo.id)} />
							</Col>
						</Row>
					</ListGroup.Item>
				))}

				{data?.length === 0 && (
					<ListGroup.Item>
						<Row className="d-flex justify-content-center">
							<Col>Henüz görev eklenmedi.</Col>
						</Row>
					</ListGroup.Item>
				)}
			</ListGroup>
		</Card>
	)
}

export default TodoList
