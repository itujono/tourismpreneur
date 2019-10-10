import React, { useState } from 'react'
import { Row, Col, Menu, Drawer } from 'antd'
import styled from 'styled-components'
import Logo from './Logo'
import Heading from './Heading'
import Button from './Button'
import { Link } from 'gatsby'
import { baseStyles } from '../styles'

const Nav = styled.nav`
	width: 80%;
	margin: 0 auto;
	background-color: transparent;
`

const StyledMenu = styled(Menu)`
	&& {
		border-bottom: transparent;
		padding-top: 5px;
		line-height: 4;
		> .ant-menu-submenu,
		.ant-menu-item,
		.ant-menu-submenu-selected {
			border-bottom: 2px solid transparent;
			&:hover {
				border-bottom: 2px solid transparent;
			}
		}
		.ant-menu-item {
			.anticon {
				margin-right: 0;
			}
		}
	}
`

const MenuItem = styled.p`
	font-weight: bold;
	font-size: 2em;
	a {
		color: ${baseStyles.primaryColor};
	}
`

const StyledDrawer = styled(Drawer)`
	.ant-drawer-header,
	.ant-drawer-body {
		padding-left: 3em;
		margin-bottom: 3em;
	}
`

function Navbar({ user, role, ...props }) {
	const [menuDrawer, setMenuDrawer] = useState(false)

	return (
		<Nav>
			<StyledDrawer
				title="Menu"
				onClose={() => setMenuDrawer(false)}
				visible={menuDrawer}
				width={450}
			>
				<MenuItem>
					<Link to="/about">About</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/events">Events</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/contact">Contact</Link>
				</MenuItem>
			</StyledDrawer>
			<Row type="flex" justify="space-between">
				<Col lg={8} xs={16}>
					<Logo /> &nbsp;{' '}
					<span>
						<Heading
							bold
							content="Tacita Enterprise"
							style={{
								display: 'inline-block',
								verticalAlign: 'sub',
							}}
						/>
					</span>
				</Col>
				<Col lg={8} xs={8} style={{ textAlign: 'right' }}>
					<StyledMenu mode="horizontal">
						<Menu.Item
							key="notifications"
							style={{ paddingLeft: '2em', paddingRight: 0 }}
						>
							<Button icon="plus" size="large">
								Browse events
							</Button>
						</Menu.Item>
						<Menu.Item
							key="notifications"
							style={{ paddingLeft: '2em', paddingRight: 0 }}
						>
							<Button
								shape="circle"
								icon="menu"
								onClick={() => setMenuDrawer(!menuDrawer)}
							/>
						</Menu.Item>
					</StyledMenu>
				</Col>
			</Row>
		</Nav>
	)
}

// prettier-ignore
export default Navbar
