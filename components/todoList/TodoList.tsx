import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'
import { deleteDoc, doc } from 'firebase/firestore'

import { ITodo } from '../tabsNavigation/models/ITodo'
import db from '@/app/firebaseConfig'
import { sendToast } from '@/global/sendToast'
import { useRouter } from 'next/navigation'

const TodoList = ({ data }: { data?: ITodo[] }) => {
	const router = useRouter()

	const handleDelete = (id: string) => {
		try {
			deleteDoc(doc(db, 'todos', id))
			sendToast('Görev başarıyla silindi.', true)
		} catch (error) {
			sendToast('Görev silinirken bir hata oluştu.', false)
		}
	}

	return (
		<Card>
			<ListGroup variant="flush">
				{data?.map((todo) => (
					<ListGroup.Item key={todo.id}>
						<Row>
							<Col>{todo.name}</Col>
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
			</ListGroup>
		</Card>
	)
}

export default TodoList
