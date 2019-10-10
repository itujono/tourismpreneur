import React from 'react'
import { Row, Col, Menu, Icon, Typography } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from './Logo'
import Heading from './Heading'
import Button from './Button'

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
	}
`

function Navbar({ user, role, ...props }) {
	return (
		<Nav>
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
					</StyledMenu>
				</Col>
			</Row>
		</Nav>
	)
}

// prettier-ignore
export default Navbar
