'use client'

import { Button, Container, Form } from 'react-bootstrap'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { ITodo } from '@/components/tabsNavigation/models/ITodo'
import TodoForm from '@/components/pages/todoForm'
import db from '@/app/firebaseConfig'

const TODOS_COLLECTION = 'todos'

async function fetchTodoById(todoId: string): Promise<ITodo | null> {
	const docRef = doc(db, TODOS_COLLECTION, todoId)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return {
			id: docSnap.id,
			...(docSnap.data() as ITodo)
		}
	} else {
		return null
	}
}

const TodoDetail = () => {
	const [todo, setTodo] = useState<ITodo | null>(null)
	const { id } = useParams()
	const router = useRouter()

	useEffect(() => {
		if (id) {
			fetchTodoById(id as string)
				.then(setTodo)
				.catch(console.error)
		}
	}, [id])

	if (!todo) return <p>Yükleniyor...</p>

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Detayı</h1>
			<TodoForm todo={todo} />
			<Button variant="primary" onClick={() => router.push('/')}>
				Geri Dön
			</Button>
		</Container>
	)
}

export default TodoDetail
