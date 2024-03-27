'use client'

import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import React, { useState } from 'react'

import AddModal from '@/components/AddModal'
import TabsNavigation from '@/components/TabsNavigation'

const Home: React.FC = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			{/* header */}
			<Row className="w-100 flex-column flex-md-row align-items-center mb-md-2 mb-3">
				<Col md={3}>
					<h1>Görevler</h1>
				</Col>
				<Col md={6} className="d-flex justify-content-center align-items-center gap-2">
					<Form.Control type="text" placeholder="Ara..." />
					<Button variant="primary" className="ml-2">
						Ara
					</Button>
				</Col>
				<Col md={3}>
					<Button variant="success" onClick={handleShow} className="w-100">
						Görev Ekle
					</Button>
				</Col>
			</Row>
			{/* add modal */}
			<AddModal show={show} handleClose={handleClose} />
			{/* tabs */}
			<TabsNavigation />
		</Container>
	)
}

export default Home
