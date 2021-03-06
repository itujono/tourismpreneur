import React, { useState } from 'react'
import { Row, Col, Menu, Drawer } from 'antd'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import { Link } from 'gatsby'
import { baseStyles } from '../styles'
import { media } from '../utils'
import useMedia from 'use-media'

const Nav = styled.nav`
	width: 85%;
	margin: 0 auto;
	background-color: transparent;

	${media.mobile`
		width: 100%;
	`}
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
	font-family: 'Futura Bold', Arial, Helvetica, sans-serif;
	font-size: 2em;
	line-height: 1;
	margin-bottom: 1.5em;
	&:hover {
		a {
			padding: 0;
			text-decoration: none;
			background-image: linear-gradient(
				transparent 0%,
				transparent calc(50% - 8px),
				rgba(0, 255, 0, 0.35) calc(50% - 8px),
				rgba(0, 255, 0, 0.35) 100%
			);
			transition: background-position 120ms ease-in-out, padding 120ms ease-in-out;
			background-size: 100% 200%;
			background-position: 0 0;
			word-break: break-word;
		}
		span {
			background-image: unset;
			background-size: unset;
			background-position: unset;
		}
	}
	a {
		color: ${baseStyles.primaryColor};
		span {
			font-family: 'Futura Medium', Arial, Helvetica, sans-serif;
			font-weight: initial;
			font-size: initial;
			color: ${baseStyles.greyColor};
		}
	}
`

const StyledDrawer = styled(Drawer)`
	.ant-drawer-header,
	.ant-drawer-body {
		padding-left: 3em;
		margin-bottom: 3em;
	}
`

function Navbar() {
	const [menuDrawer, setMenuDrawer] = useState(false)
	const isMobile = useMedia('(max-width: 414px)')

	return (
		<Nav>
			<StyledDrawer
				title="Menu"
				onClose={() => setMenuDrawer(false)}
				visible={menuDrawer}
				width={isMobile ? '85%' : 450}
			>
				<MenuItem>
					<Link to="/about" onClick={() => setMenuDrawer(false)}>
						ABOUT <br />
						<span>If you want to know us much closer</span>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/events" onClick={() => setMenuDrawer(false)}>
						EVENTS <br />
						<span>See what we have done for people</span>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/contact" onClick={() => setMenuDrawer(false)}>
						CONTACT <br />
						<span>Inquiries? Asking something? Let's do this!</span>
					</Link>
				</MenuItem>
			</StyledDrawer>
			<Row type="flex" justify="space-between" align="middle">
				<Col lg={8} xs={16}>
					<Logo /> &nbsp;{' '}
					{/* <span>
						<Heading
							bold
							content="Tacita Enterprise"
							style={{
								display: 'inline-block',
								verticalAlign: 'sub',
							}}
						/>
					</span> */}
				</Col>
				<Col lg={8} xs={8} style={{ textAlign: 'right' }}>
					{isMobile ? (
						<Button shape="circle" icon="menu" onClick={() => setMenuDrawer(!menuDrawer)} />
					) : (
						<StyledMenu mode="horizontal">
							<Menu.Item key="events" style={{ paddingLeft: '2em', paddingRight: 0 }}>
								<Link to="/events">
									<Button icon="plus" size="large">
										Browse events
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item key="menus" style={{ paddingLeft: '2em', paddingRight: 0 }}>
								<Button shape="circle" icon="menu" onClick={() => setMenuDrawer(!menuDrawer)} />
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
