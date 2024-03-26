'use client'

import { Container } from 'react-bootstrap'
import React from 'react'
import TabsNavigation from '@/components/TabsNavigation'

const Home: React.FC = () => {
	return (
		<Container className="d-flex justify-content-center mt-5">
			<TabsNavigation />
		</Container>
	)
}

export default Home
