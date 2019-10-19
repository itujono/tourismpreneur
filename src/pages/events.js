import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { Row, Col, Icon, Input, Form, Select } from 'antd'
import { baseStyles } from '../styles'
import { eventItems } from '../utils/dummy'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

const MainSection = styled(Section)`
	padding: 5em 7em;
`

const EventItem = styled.div`
	margin-bottom: 3em;
	background-color: ${baseStyles.secondaryColor};
	transition: all 0.2s ease;
	&:hover {
		box-shadow: ${baseStyles.boxShadow.hover};
		transform: translateY(-5px);
	}
	.left {
		img {
			object-fit: cover;
		}
	}
	.right {
		padding: 4em;
		.ant-typography {
			line-height: 1.2;
			h4 {
				line-height: 1.2;
				font-size: 2.7em;
			}
		}
	}
`

function Events({ data: { allContentfulEvent = {} } }) {
	const eventData = allContentfulEvent.edges || []

	console.log({ eventData })

	return (
		<Layout>
			<MainSection ph="very">
				<Row gutter={64}>
					<Col lg={16}>
						{eventData.map(({ node }) => (
							<EventItem key={node.id}>
								<Link to="/">
									<Row type="flex">
										<Col lg={8} className="left">
											<img
												src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f96172c81ca3_passion-01.jpg"
												height="100%"
												width="100%"
												alt="Some event item"
											/>
										</Col>
										<Col lg={16} className="right">
											<p>
												{node.fromDate} - {node.toDate}
											</p>
											<Heading content={node.title} />
											<Button type="primary">
												Lihat detail{' '}
												<Icon type="right" />
											</Button>
										</Col>
									</Row>
								</Link>
							</EventItem>
						))}
					</Col>
					<Col lg={8}>
						<Form layout="vertical" style={{ marginBottom: '3em' }}>
							<Form.Item name="search" label="Cari event">
								<Input.Search
									name="search"
									placeholder="Misal: Djarum Super"
									style={{ width: '100%' }}
								/>
							</Form.Item>
						</Form>
						<Form layout="vertical" style={{ marginBottom: '3em' }}>
							<Form.Item name="sort" label="Urutkan event">
								<Select
									name="sort"
									placeholder="Urutkan event"
									label="Boong"
								></Select>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</MainSection>
		</Layout>
	)
}

export const queryAllEvents = graphql`
	query queryEventItem {
		allContentfulEvent {
			edges {
				node {
					id
					title
					featuredImage {
						fluid {
							src
						}
					}
					fromDate(formatString: "DD MMM YYYY")
					toDate(formatString: "DD MMM YYYY")
				}
			}
		}
	}
`

export default Events
