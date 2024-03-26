import { Col, Row, Tab } from 'react-bootstrap'

import CardItem from './CardItem'
import NavPill from './NavPill'
import React from 'react'
import TabPaneContent from './TabPaneContent'

const TabsNavigation: React.FC = () => (
	<Tab.Container id="left-tabs-example" defaultActiveKey="first">
		<Row className="d-flex justify-content-center w-100">
			<Col sm={3}>
				<NavPill
					tabs={[
						{ eventKey: 'first', label: 'Tamamlanmış' },
						{ eventKey: 'second', label: 'Tamamlanmamış' }
					]}
				/>
			</Col>
			<Col sm={9}>
				<Tab.Content>
					<TabPaneContent eventKey="first">
						<CardItem />
					</TabPaneContent>
					<TabPaneContent eventKey="second">
						<CardItem />
					</TabPaneContent>
				</Tab.Content>
			</Col>
		</Row>
	</Tab.Container>
)

export default TabsNavigation
