'use client'

import { Button, Container, Form } from 'react-bootstrap'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { ITodo } from '@/models/ITodo'
import db from '@/app/firebaseConfig'

const TodoDetail = () => {
	const [todo, setTodo] = useState<ITodo | null>(null)
	const { id } = useParams()
	const router = useRouter()

	useEffect(() => {
		const fetchTodoById = async (todoId: string): Promise<ITodo | null> => {
			const docRef = doc(db, 'todos', todoId)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				let todoData = docSnap.data() as ITodo

				const { id, ...rest } = todoData
				return {
					id: docSnap.id,
					...rest
				}
			} else {
				return null
			}
		}

		if (id) {
			const todoId = typeof id === 'string' ? id : id[0]
			fetchTodoById(todoId).then(setTodo).catch(console.error)
		}
	}, [id])

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Detayı</h1>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Görev Adı</Form.Label>
					<Form.Control type="text" value={todo?.name || ''} readOnly />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Görev Açıklaması</Form.Label>
					<Form.Control as="textarea" rows={3} value={todo?.description || ''} readOnly />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Görev Durumu</Form.Label>
					<Form.Control type="text" value={todo?.isCompleted ? 'Tamamlandı' : 'Tamamlanmadı'} readOnly />
				</Form.Group>
			</Form>
			<Button variant="primary" onClick={() => router.push('/')}>
				Geri Dön
			</Button>
		</Container>
	)
}

export default TodoDetail
