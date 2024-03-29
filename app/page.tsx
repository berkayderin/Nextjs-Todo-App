'use client'

import { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import { ITodos } from '@/models/ITodos'
import Service from '@/utils/Service'
import TabsNavigation from '@/components/TabsNavigation'

const Home = () => {
	const [todos, setTodos] = useState<ITodos[]>([])

	const fetchData = async () => {
		try {
			const response = await Service.get('/todos')
			const todos = response.data
			setTodos(todos)
			console.log('datalar:', todos)
			return todos
		} catch (error) {
			console.error(error)
		}
	}

	const deleteTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id)) // todo.id !== id olanları filtrele
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<Header />
			<TabsNavigation todos={todos} onDeleteTodo={deleteTodo} />
		</Container>
	)
}

export default Home
