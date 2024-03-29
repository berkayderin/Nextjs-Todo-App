import React from 'react'
import { Tab } from 'react-bootstrap'

interface TabPaneContentProps {
	eventKey: string
	children: React.ReactNode
}

const TabPaneContent: React.FC<TabPaneContentProps> = ({ eventKey, children }) => (
	<Tab.Pane eventKey={eventKey}>{children}</Tab.Pane>
)

export default TabPaneContent
