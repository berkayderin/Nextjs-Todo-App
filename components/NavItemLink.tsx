import { Nav } from 'react-bootstrap'
import React from 'react'

interface NavItemLinkProps {
	eventKey: string
	children: React.ReactNode
}

const NavItemLink: React.FC<NavItemLinkProps> = ({ eventKey, children }) => (
	<Nav.Item>
		<Nav.Link eventKey={eventKey}>{children}</Nav.Link>
	</Nav.Item>
)

export default NavItemLink
