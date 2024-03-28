import { Col, Form, Row, Tab } from 'react-bootstrap'

import { ITodo } from './models/ITodo'
import NavPill from '../navPill/NavPill'
import TabPaneContent from '../tabPaneContent/TabPaneContent'
import TodoList from '../todoList/TodoList'

interface TabsNavigationProps {
	todos: ITodo[]
	onDeleteTodo: (id: string) => void
}

const TabsNavigation = ({ todos, onDeleteTodo }: TabsNavigationProps) => {
	const isCompleted = todos.filter((todo) => todo.isCompleted)
	const isNotCompleted = todos.filter((todo) => !todo.isCompleted)
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row className="d-flex justify-content-center w-100">
				<Col sm={3} className="mb-3">
					<NavPill
						tabs={[
							{ eventKey: 'first', label: 'Tamamlanmamış' },
							{ eventKey: 'second', label: ' Tamamlanmış' }
						]}
					/>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						{/* tamamlanmış todolar */}
						<TabPaneContent eventKey="first">
							<TodoList data={isNotCompleted} onDelete={onDeleteTodo} />
						</TabPaneContent>
						{/* tamamlanmamış todolar */}
						<TabPaneContent eventKey="second">
							<TodoList data={isCompleted} onDelete={onDeleteTodo} />
						</TabPaneContent>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	)
}

export default TabsNavigation
