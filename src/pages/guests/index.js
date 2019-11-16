import React, { useState } from 'react'
import { Section, Heading, Modal } from '../../components'
import { Card, Tag, Row, Col } from 'antd'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import QrCode from 'qrcode.react'

const CardGrid = styled(Card.Grid)`
	text-align: center;
	width: 20%;
	cursor: pointer;
	h4.ant-typography {
		margin-bottom: 1em;
	}
`

export default function Guests({ data: { allContentfulGuest: guest = {} } }) {
	const [selectedGuest, setSelectedGuest] = useState({})

	const handleSelectGuest = guest => {
		setSelectedGuest(guest)
	}

	return (
		<Section>
			<Modal visible={Object.keys(selectedGuest).length} onCancel={() => setSelectedGuest(false)} footer={false}>
				<Row gutter={32}>
					<Col lg={16}>
						<Heading content={selectedGuest.name} subheader={selectedGuest.title} />
						<QrCode value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}`} />
					</Col>
					<Col lg={8}>Gak tau mau nulis apa</Col>
				</Row>
			</Modal>
			<Heading content="Daftar tamu" subheader="List tamu undangan acara" />
			<Card>
				{(guest.edges || []).map(({ node }) => {
					const tagColor = node.title === 'VIP' ? '#2db7f5' : node.title === 'VVIP' ? '#87d068' : ''

					return (
						<CardGrid key={node.id} onClick={() => handleSelectGuest(node)}>
							<Heading content={node.name} subheader={<Tag color={tagColor}>{node.title}</Tag>} />
						</CardGrid>
					)
				})}
			</Card>
		</Section>
	)
}

export const queryAllGuests = graphql`
	query queryAllGuests {
		allContentfulGuest {
			edges {
				node {
					id
					name
					photo {
						fluid {
							src
						}
					}
					title
					seatNumber
					studentName
					major
					designation
					isAttending
				}
			}
		}
	}
`
