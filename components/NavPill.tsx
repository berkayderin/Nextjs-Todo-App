import { ITab } from '@/models/ITab'
import { Nav } from 'react-bootstrap'
import NavItemLink from './NavItemLink'

interface NavPillProps {
	tabs: ITab[]
}

const NavPill: React.FC<NavPillProps> = ({ tabs }) => (
	<Nav variant="pills" className="flex-column bg-gradient text-light">
		{tabs.map((tab) => (
			<NavItemLink key={tab.eventKey} eventKey={tab.eventKey}>
				{tab.label}
			</NavItemLink>
		))}
	</Nav>
)

export default NavPill
