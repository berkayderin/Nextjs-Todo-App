import { Button, Col, Form, Row, Tab } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

import { ITodo } from './models/ITodo'
import NavPill from '../navPill/NavPill'
import Service from '@/global/Service'
import TabPaneContent from '../tabPaneContent/TabPaneContent'
import TodoList from '../todoList/TodoList'

const TabsNavigation = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const fetchData = async () => {
		try {
			const response = await Service.get('/api/todos')
			const todos = response.data
			setTodos(todos)
			console.log('datalar:', todos)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const isCompleted = todos.filter((todo) => todo.isCompleted)
	const isNotCompleted = todos.filter((todo) => !todo.isCompleted)
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row className="d-flex justify-content-center w-100">
				<Col sm={3} className="mb-3">
					<NavPill
						tabs={[
							{ eventKey: 'first', label: 'Tamamlanmış' },
							{ eventKey: 'second', label: 'Tamamlanmamış' }
						]}
					/>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						{/* tamamlanmış todolar */}
						<TabPaneContent eventKey="first">
							<TodoList data={isCompleted} />
						</TabPaneContent>
						{/* tamamlanmamış todolar */}
						<TabPaneContent eventKey="second">
							<TodoList data={isNotCompleted} />
						</TabPaneContent>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	)
}

export default TabsNavigation
