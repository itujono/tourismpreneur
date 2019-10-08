import React, { useState } from 'react'
import { Layout as PageLayout, Breadcrumb, Menu, Icon } from 'antd'
import styled from 'styled-components'
import { media } from './utils'
import { Link } from 'gatsby'
import Navbar from './components/Navbar'

const Header = styled(PageLayout.Header)`
	&& {
		${media.mobile`
            padding-left: 1em;
            padding-right: 1em;
        `}
	}

	&& {
		background-color: #fff;
		height: 5em;
		padding-left: 2em;
	}
`
const Footer = styled(PageLayout.Footer)`
	text-align: center;
	padding: 3em;
`

const Section = styled.section`
	padding-left: 4em;
	padding-right: 4em;
	padding-top: 3em;
`

const Bread = styled(Breadcrumb)`
	margin-bottom: 2em;
`

const Sidebar = styled(PageLayout.Sider)`
	&& {
		min-height: 100vh;
		/* position: fixed;
        overflow: auto;
        left: 0; */
		background: #fff;
		border-right: 1px solid #e8e8e8;
		.ant-layout-sider-children {
			padding-left: 1em;
			padding-right: 1em;
		}
		.ant-layout-sider-trigger {
			background: #ff9d00;
		}
	}
`

const StyledMenu = styled(Menu)`
	&& {
		padding-top: 2em;
		border-right: none;
		.ant-menu-item-selected {
			border-radius: 4px;
		}
	}
`

const StyledPageLayout = styled(PageLayout)`
	&& {
		overflow-x: ${({ pathname }) =>
			pathname === '/dashboard/profile' && 'visible'} !important;
	}
`

function Layout({
	basic = false,
	sidebar = false,
	children,
	breadcrumb = false,
	location = {},
	history,
	...props
}) {
	const loc = location && location.pathname.split('/')
	const bread = loc.map((item, idx) =>
		idx === 0 ? ['Home', ...item] : [...item]
	)

	return (
		<PageLayout {...props}>
			{!basic && (
				<Header>
					<Navbar />
				</Header>
			)}

			<PageLayout.Content>
				<PageLayout>
					{sidebar && (
						<Sidebar breakpoint="lg" collapsedWidth="0">
							<StyledMenu>
								<Menu.Item key="main">
									<Link to="/dashboard/main">
										<Icon type="layout" /> &nbsp; Dashboard
									</Link>
								</Menu.Item>
								<Menu.Item key="settings">
									<Link to="/dashboard/settings">
										<Icon type="experiment" /> &nbsp;
										Settings
									</Link>
								</Menu.Item>
								{/* <Menu.Item key="feedback">
                                    <NavLink to="/user/feedback" className="ant-btn-link">
                                        <span role="image">🎉</span> &nbsp; Give us feedback
                                    </NavLink>
                                </Menu.Item> */}
							</StyledMenu>
						</Sidebar>
					)}

					<StyledPageLayout pathname={props.pathname}>
						<PageLayout.Content>
							{breadcrumb && (
								<Section>
									<Bread>
										{bread.map((item, idx) => (
											<Breadcrumb.Item key={idx}>
												{item}
											</Breadcrumb.Item>
										))}
									</Bread>
								</Section>
							)}
							{children}
						</PageLayout.Content>
						{sidebar && (
							<Footer>
								<div>
									{/* <img src={logo} width="140" /> <br /> */}
									<br />
									<p>
										TutorSMS Singapore &middot; all rights
										reserved 2019
									</p>
									<p>
										<a
											href="http://tutorsms.com/tnc"
											target="_blank"
										>
											Terms & conditions
										</a>{' '}
										&nbsp; &middot; &nbsp;
										<a
											href="http://tutorsms.com/privacy"
											target="_blank"
										>
											Privacy policy
										</a>
									</p>
								</div>
							</Footer>
						)}
					</StyledPageLayout>
				</PageLayout>
			</PageLayout.Content>

			{!basic && !sidebar && (
				<Footer>
					<div>
						{/* <img src={logo} width="140" /> <br /> */}
						<p>
							TutorSMS Singapore &middot; all rights reserved 2019
						</p>
						<p>
							<a href="http://tutorsms.com/tnc" target="_blank">
								Terms & conditions
							</a>{' '}
							&nbsp; &middot; &nbsp;
							<a
								href="http://tutorsms.com/privacy"
								target="_blank"
							>
								Privacy policy
							</a>
						</p>
					</div>
				</Footer>
			)}
		</PageLayout>
	)
}

// prettier-ignore
export default Layout
