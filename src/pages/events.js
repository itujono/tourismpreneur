import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { Row, Col, Icon, Input, Form, Select } from 'antd'
import { baseStyles } from '../styles'
import { eventItems } from '../utils/dummy'
import { Link } from 'gatsby'

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

export default function Events() {
	return (
		<Layout>
			<MainSection ph="very">
				<Row gutter={64}>
					<Col lg={16}>
						{eventItems.map(item => (
							<EventItem key={item.id}>
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
											<p>{item.date}</p>
											<Heading content={item.title} />
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
								></Select>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</MainSection>
		</Layout>
	)
}
