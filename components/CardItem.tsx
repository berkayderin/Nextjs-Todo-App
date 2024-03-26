import { Card, ListGroup } from 'react-bootstrap'

const CardItem = () => {
	return (
		<Card>
			<ListGroup variant="flush">
				<ListGroup.Item>First item</ListGroup.Item>
				<ListGroup.Item>Second item</ListGroup.Item>
				<ListGroup.Item>Third item</ListGroup.Item>
			</ListGroup>
		</Card>
	)
}

export default CardItem
