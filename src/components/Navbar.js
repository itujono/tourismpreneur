import React from 'react'
import { Row, Col, Menu, Icon, Typography, Button } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from './Logo'
import Heading from './Heading'

const Nav = styled.nav`
	width: inherit;
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
	const handleLogout = () => {
		props.unauthUser()
	}

	return (
		<Nav>
			<Row type="flex" justify="space-between">
				<Col lg={8} xs={16}>
					<Logo /> &nbsp;{' '}
					<span>
						<Heading
							bold
							content="Cudy KPI Dashboard"
							style={{
								display: 'inline-block',
								verticalAlign: 'sub',
							}}
						/>
					</span>
				</Col>
				<Col lg={8} xs={8} style={{ textAlign: 'right' }}>
					{user ? (
						<StyledMenu mode="horizontal">
							<Menu.Item
								key="notifications"
								style={{ paddingLeft: '2em', paddingRight: 0 }}
							>
								<Icon type="bell" theme="filled" />
							</Menu.Item>
							<Menu.SubMenu
								title={
									<Button
										type="ghost"
										shape="circle-outline"
										icon="user"
										style={{ marginRight: 0 }}
									/>
								}
							>
								<Menu.Item key="greeting">
									<Typography.Paragraph strong>
										Hi, Mulyawan!
									</Typography.Paragraph>
								</Menu.Item>
								<Menu.Item key="profile">
									<Link to="/profile">View profile</Link>
								</Menu.Item>
								<Menu.Divider />
								<Menu.Item key="logout" onClick={handleLogout}>
									Logout
								</Menu.Item>
							</Menu.SubMenu>
						</StyledMenu>
					) : (
						<StyledMenu mode="horizontal">
							<Menu.Item key="login" style={{ paddingRight: 0 }}>
								<Button shape="circle" type="primary">
									<Icon
										type="user"
										style={{ marginRight: 0 }}
									/>
								</Button>
							</Menu.Item>
						</StyledMenu>
					)}
				</Col>
			</Row>
		</Nav>
	)
}

// prettier-ignore
export default Navbar
