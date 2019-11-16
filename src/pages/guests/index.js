import React, { useState } from 'react'
import { Section, Heading, Modal } from '../../components'
import { Card, Tag, Row, Col, Switch } from 'antd'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import QrCode from 'qrcode.react'
import { media } from '../../utils'

const CardGrid = styled(Card.Grid)`
	text-align: center;
	width: 20%;
	cursor: pointer;
	h4.ant-typography {
		margin-bottom: 0.5em;
		+ p {
			margin-bottom: 0;
		}
	}

	${media.mobile`
        width: 50%;
    `}
`

const StyledModal = styled(Modal)`
	height: ${({ qrCodeOnly }) => qrCodeOnly && '500px'};
	transition: all 0.4s ease;
	.ant-modal-content {
		height: 100%;
		.ant-modal-body {
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 100%;
			> .ant-row {
				width: 100%;
			}
			.qr-section {
				padding-top: 3em;
				text-align: center;
			}
		}
	}
`

export default function Guests({ data: { allContentfulGuest: guest = {} } }) {
	const [selectedGuest, setSelectedGuest] = useState({})
	const [qrCodeOnly, setQrCodeOnly] = useState(false)

	const handleSelectGuest = guest => {
		setSelectedGuest(guest)
	}

	const handleCloseModal = () => {
		setQrCodeOnly(false)
		setSelectedGuest(false)
	}

	return (
		<Section>
			<StyledModal
				visible={Object.keys(selectedGuest).length}
				onCancel={handleCloseModal}
				width={qrCodeOnly ? 800 : 640}
				footer={false}
				qrCodeOnly={qrCodeOnly}
			>
				<Row gutter={32}>
					<Col lg={16}>
						{qrCodeOnly ? (
							<Row type="flex" justify="center" align="middle">
								<Col>
									<QrCode value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}`} />
								</Col>
							</Row>
						) : (
							<>
								<Heading content={selectedGuest.name} subheader={selectedGuest.title} />
								<QrCode value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}`} />
							</>
						)}
					</Col>
					<Col lg={8} className="qr-section">
						<Switch name="qrcode" onChange={checked => setQrCodeOnly(checked)} checked={qrCodeOnly} />
						&nbsp;
						<span>QR code saja</span>
					</Col>
				</Row>
			</StyledModal>
			<Heading content="Daftar tamu" subheader="List tamu undangan acara" />
			<Card>
				{(guest.edges || []).map(({ node }) => {
					const tagColor = node.title === 'VIP' ? '#2db7f5' : node.title === 'VVIP' ? '#87d068' : ''

					return (
						<CardGrid key={node.id} onClick={() => handleSelectGuest(node)}>
							<Heading
								content={node.name}
								subheader={<Tag color={tagColor}>{node.title}</Tag>}
								marginBottom="0"
							/>
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
