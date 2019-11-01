import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { Row, Col, Icon, Input, Form, Select, Switch, Badge } from 'antd'
import { baseStyles } from '../styles'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import useMedia from 'use-media'
import EventModal from '../templates/EventModal'
import Calendar from '../components/Calendar'
import moment from 'moment'

const MainSection = styled(Section)`
	padding: 5em 7em;
`

const EventItem = styled.div`
	margin-bottom: 3em;
	background-color: ${baseStyles.secondaryColor};
	transition: all 0.2s ease;
	&:hover {
		box-shadow: ${baseStyles.boxShadow.main};
		transform: translateY(-5px);
	}
	.left {
		max-height: 280px;
		img {
			object-fit: cover;
		}
	}
	.right {
		padding: 4em;
		.date {
			color: ${baseStyles.greyColor};
		}
		.ant-typography {
			line-height: 1.2;
			h4 {
				line-height: 1.2;
				font-size: 2.2em;
			}
		}
	}
`

function Events({ data: { allContentfulEvent = {} } }) {
	const eventData = allContentfulEvent.edges || []
	const [calendarView, setCalendarView] = useState(false)

	const [selectedEvent, setSelectedEvent] = useState({})
	const isMobile = useMedia('(max-width: 414px)')

	const sortOptions = [
		{ value: 'fromDate', label: 'Tanggal event' },
		{ value: 'createdAt', label: 'Tanggal postingan' },
	]

	const handleSelectEvent = value => {
		const selected = eventData.find(({ node }) => node.fromDate === moment(value).format('DD MMM YYYY')) || {}
		setSelectedEvent(selected.node || {})
	}

	const renderDayCell = value => {
		const hasEvent =
			eventData.filter(({ node }) => {
				return node.fromDate === moment(value).format('DD MMM YYYY')
			}) || []
		if (hasEvent.length > 0) {
			const event = (hasEvent[0] || {}).node || {}
			return isMobile ? <Badge status="success" /> : <Badge status="success" text={event.title} />
		}
		return
	}

	const handleToggleView = checked => setCalendarView(checked)

	return (
		// prettier-ignore
		<Layout>
			<EventModal
				item={selectedEvent}
				visible={Object.keys(selectedEvent).length > 0}
				onCancel={() => setSelectedEvent({})}
			/>
			<MainSection ph="very">
				<Row css={`margin-bottom: 2em`}>
					<Col lg={12}>
						<Heading content="Event nya Tacita" marginBottom="2em" />
						<label for="event-calendar"><Switch name="event-calendar" onChange={handleToggleView} /> &nbsp; Calendar view</label>
					</Col>
				</Row>
				<Row gutter={64}>
					{ calendarView ? <Col lg={18}><Calendar fullscreen={!isMobile} dateCellRender={renderDayCell} onSelect={handleSelectEvent} /></Col> : <Col lg={18}>
						{eventData.map(({ node }) => (
							<EventItem key={node.id}>
								<Link to={`/events/${node.id}`}>
									<Row type="flex">
										<Col lg={8} className="left">
											<img
												src={node.featuredImage.fluid.src}
												height="100%"
												width="100%"
												alt="Some event item"
											/>
										</Col>
										<Col lg={16} className="right">
											<p className="date">
												{node.fromDate} - {node.toDate}
											</p>
											<Heading content={node.title} />
											<Button type="primary">
												Lihat detail <Icon type="right" />
											</Button>
										</Col>
									</Row>
								</Link>
							</EventItem>
						))}
					</Col>}
					<Col lg={6}>
						<Form layout="vertical" style={{ marginBottom: '3em' }}>
							<TextInput search name="search" label="Cari event" placeholder="Misal: Djarum Super" />
						</Form>
						<Form layout="vertical" style={{ marginBottom: '3em' }}>
							<SelectInput name="sort" label="Urutkan event" placeholder="Urutkan event" options={sortOptions} defaultValue={sortOptions[0].value} />
						</Form>
					</Col>
				</Row>
			</MainSection>
		</Layout>
	)
}

export const queryAllEvents = graphql`
	query queryEventItem {
		allContentfulEvent(sort: { fields: fromDate }) {
			edges {
				node {
					id
					title
					client
					tags
					featuredImage {
						fluid {
							src
						}
					}
					fromDate(formatString: "DD MMM YYYY", locale: "id")
					toDate(formatString: "DD MMM YYYY", locale: "id")
				}
			}
		}
	}
`

export default Events
