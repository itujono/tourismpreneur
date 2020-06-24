import React, { useState, useEffect } from 'react'
import { Section, Heading, Modal } from '../../components'
import { Card, Tag, Row, Col, Switch, Input, Select, Descriptions } from 'antd'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import QrCode from 'qrcode.react'
import useMedia from 'use-media'
import { titles, sorting } from '../../utils/dummy'
import { media } from '../../utils'
import { WEB_URL } from '../../utils/constants'

const StyledCard = styled(Card)`
	.ant-card-body {
		display: flex;
		flex-wrap: wrap;
	}
`

const CardGrid = styled(Card.Grid)`
	text-align: center;
	width: 19%;
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

const QrSection = styled(Row).attrs(props => ({
	type: 'flex',
	justify: props.qrCodeOnly ? 'center' : 'space-around',
	gutter: 16,
}))`
	text-align: center;
`

export default function Guests({ data: { allContentfulGuest: guest = {} } }) {
	const [selectedGuest, setSelectedGuest] = useState({})
	const [qrCodeOnly, setQrCodeOnly] = useState(false)
	const [initial, setInitial] = useState(true)
	const [guestList, setGuestList] = useState([])
	const isMobile = useMedia('(max-width: 414px)')

	const theData = initial ? guest.edges : guestList
	const isSpecialGuest = selectedGuest.title === 'VIP' || selectedGuest.title === 'VVIP'

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

	const handleSort = value => {
		const data = guest.edges || []
		// if (!initial) {
		const sorted = data.slice().sort((a, b) => {
			const nameA = a.node[value]?.toLowerCase()
			const nameB = b.node[value]?.toLowerCase()
			return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
		})
		setGuestList(sorted)
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

	return (
		<Section width={isMobile ? '100%' : '80%'} centered>
			<StyledModal
				visible={Object.keys(selectedGuest).length}
				onCancel={handleCloseModal}
				width={qrCodeOnly ? 800 : 740}
				footer={false}
				qrCodeOnly={qrCodeOnly}
			>
				<Row gutter={32}>
					<Col lg={18}>
						{qrCodeOnly ? (
							<Row type="flex" justify="center" align="middle">
								<Col lg={24}>
									<QrSection qrCodeOnly={qrCodeOnly}>
										<Col lg={12}>
											<p>Undangan</p>
											<QrCode size={220} value={`${WEB_URL}/guest/${selectedGuest.id}`} />
										</Col>
										{isSpecialGuest && (
											<Col lg={12}>
												<p>Nomor kursi</p>
												<QrCode
													value={`${WEB_URL}/guest/${selectedGuest.id}?seatNumber=true`}
												/>
											</Col>
										)}
									</QrSection>
								</Col>
							</Row>
						) : (
							<>
								<Heading
									content={selectedGuest.name}
									// content={<Link to={`/guest/${selectedGuest.id}`}>{selectedGuest.name}</Link>}
								/>
								<Descriptions colon={false} layout="vertical" className="mb2em">
									<Descriptions.Item label="Nomor HP">{selectedGuest.phoneNumber}</Descriptions.Item>
									<Descriptions.Item label="Jumlah tiket dibeli">
										{selectedGuest.ticketPurchased}
									</Descriptions.Item>
									<Descriptions.Item label="Jam tayang">
										{selectedGuest.hour?.map(item => <Tag>{item}</Tag>)}
									</Descriptions.Item>
								</Descriptions>
								<QrSection>
									<Col lg={12}>
										<p>Scan QR Code ini pakai camera HP</p>
										<QrCode value={`${WEB_URL}/guest/${selectedGuest.id}`} />
									</Col>
									{/* {isSpecialGuest && (
										<Col lg={12}>
											<p>Nomor kursi</p>
											<QrCode
												value={`${WEB_URL}/guest/${selectedGuest.id}?seatNumber=true`}
											/>
										</Col>
									)} */}
								</QrSection>
							</>
						)}
					</Col>
					<Col lg={6} className="qr-section">
						<Switch name="qrcode" onChange={checked => setQrCodeOnly(checked)} checked={qrCodeOnly} />
						&nbsp;
						<span>QR code saja</span>
					</Col>
				</Row>
			</StyledModal>

			{/* prettier-ignore */}
			<Row
				type="flex"
				justify="space-between"
				css={` margin-bottom: ${isMobile && '2em'}; `}
			>
				<Col lg={8} xs={24} css={` text-align: ${isMobile && 'center'}; `}>
					<Heading content="Daftar tamu" subheader="List tamu undangan acara" />
				</Col>
				<Col lg={12} xs={24}>
					<Row gutter={16}>
						<Col lg={8} xs={12} css={`margin-bottom: ${isMobile && '1em'};`}>
							<Select
								name="sorting"
								placeholder="Sortir tamu"
								defaultValue="Sortir tamu..."
								style={{ width: '100%' }}
								onChange={handleSort}
							>
								{sorting.map(({ value, label }) => (
									<Select.Option value={value} key={value}>
										{label}
									</Select.Option>
								))}
							</Select>
						</Col>
						<Col lg={8} xs={12} css={`margin-bottom: ${isMobile && '1em'};`}>
							{/* <Select
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
							</Select> */}
						</Col>
						<Col lg={8} xs={24}>
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
			<StyledCard>
				{theData.length === 0 ? (
					<Section centered style={{ textAlign: 'center' }}>
						<p>Tidak ada data</p>
					</Section>
				) : (
					(theData || []).map(({ node }) => {
						const tagColor = '#87d068'
						// const tagColor = node.title === 'VIP' ? '#2db7f5' : node.title === 'VVIP' ? '#87d068' : ''

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
			</StyledCard>
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
					phoneNumber
					ticketPurchased
					date
					hour
				}
			}
		}
	}
`
