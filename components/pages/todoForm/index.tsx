import { Form } from 'react-bootstrap'
import { ITodo } from '@/components/tabsNavigation/models/ITodo'

const TodoForm = ({ todo }: { todo: ITodo }) => (
	<Form>
		<Form.Group className="mb-3">
			<Form.Label>Görev Adı</Form.Label>
			<Form.Control type="text" value={todo.name} readOnly />
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Görev Açıklaması</Form.Label>
			<Form.Control as="textarea" rows={3} value={todo.description} readOnly />
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Görev Durumu</Form.Label>
			<Form.Control type="text" value={todo.isCompleted ? 'Tamamlandı' : 'Tamamlanmadı'} readOnly />
		</Form.Group>
	</Form>
)

export default TodoForm
