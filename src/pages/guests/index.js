import React, { useState, useEffect } from 'react'
import { Section, Heading, Modal } from '../../components'
import { Card, Tag, Row, Col, Switch, Input, Select } from 'antd'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import QrCode from 'qrcode.react'
import useMedia from 'use-media'
import { titles } from '../../utils/dummy'
import { media } from '../../utils'

const CardGrid = styled(Card.Grid)`
	text-align: center;
	width: 20%;
	height: 100%;
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
	const [initial, setInitial] = useState(true)
	const [guestList, setGuestList] = useState([])
	const isMobile = useMedia('(max-width: 414px)')

	const theData = initial ? guest.edges : guestList

	const handleSelectGuest = guest => {
		setSelectedGuest(guest)
	}

	const handleCloseModal = () => {
		setQrCodeOnly(false)
		setSelectedGuest(false)
	}

	const handleFilter = value => {
		if (!initial) {
			const filtered = (guest.edges || []).filter(({ node }, _, arr) => {
				if (value === '') return arr
				return node.title === value
			})
			setGuestList(filtered)
		}
	}

	const handleSearch = value => {
		if (!initial) {
			value = value.toLowerCase()
			const filtered = guestList.filter(({ node }) => {
				const name = node.name.toLowerCase()
				return name.includes(value)
			})
			setGuestList(filtered)
		}

		if (value === '') setGuestList(guest.edges)
	}

	useEffect(() => {
		if (initial) {
			setInitial(false)
			setGuestList(guest.edges)
		}
	}, [])

	console.log({ guestList })

	return (
		<Section width={isMobile ? '100%' : '80%'} centered>
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
			<Row type="flex" justify="space-between">
				<Col lg={8}>
					<Heading content="Daftar tamu" subheader="List tamu undangan acara" />
				</Col>
				<Col lg={8}>
					<Row gutter={12}>
						<Col lg={12}>
							<Select
								name="titles"
								placeholder="Pilih jabatan"
								defaultValue="Pilih jabatan..."
								style={{ width: '100%' }}
								onChange={handleFilter}
							>
								{titles.map(({ value, label }) => (
									<Select.Option value={value} key={value}>
										{label}
									</Select.Option>
								))}
							</Select>
						</Col>
						<Col lg={12}>
							<Input.Search
								name="keyword"
								onSearch={handleSearch}
								placeholder="Cari apa saja..."
								allowClear
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Card>
				{theData.length === 0 ? (
					<Section centered style={{ textAlign: 'center' }}>
						<p>Tidak ada data</p>
					</Section>
				) : (
					(theData || []).map(({ node }) => {
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
					})
				)}
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
