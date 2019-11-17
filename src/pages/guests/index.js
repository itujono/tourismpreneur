import React, { useState, useEffect } from 'react'
import { Section, Heading, Modal } from '../../components'
import { Card, Tag, Row, Col, Switch, Input, Select } from 'antd'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import QrCode from 'qrcode.react'
import useMedia from 'use-media'
import { titles, sorting } from '../../utils/dummy'
import { media } from '../../utils'

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
}))``

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
			const nameA = a.node[value].toLowerCase()
			const nameB = b.node[value].toLowerCase()
			return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
		})
		console.log({ sorted })
		setGuestList(sorted)
		// }
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

	console.log({ guestList, initial })

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
								<Col lg={24}>
									<QrSection qrCodeOnly={qrCodeOnly}>
										<Col lg={12}>
											<p>Undangan</p>
											<QrCode
												value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}`}
											/>
										</Col>
										{isSpecialGuest && (
											<Col lg={12}>
												<p>Nomor kursi</p>
												<QrCode
													value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}?seatNumber=true`}
												/>
											</Col>
										)}
									</QrSection>
								</Col>
							</Row>
						) : (
							<>
								<Heading
									content={<Link to={`/guest/${selectedGuest.id}`}>{selectedGuest.name}</Link>}
									subheader={selectedGuest.title}
								/>
								<QrSection>
									<Col lg={12}>
										<p>Undangan</p>
										<QrCode
											value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}`}
										/>
									</Col>
									{isSpecialGuest && (
										<Col lg={12}>
											<p>Nomor kursi</p>
											<QrCode
												value={`https://tourismpreneur.netlify.com/guest/${selectedGuest.id}?seatNumber=true`}
											/>
										</Col>
									)}
								</QrSection>
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
			{/* prettier-ignore */}
			<Row
				type="flex"
				justify="space-between"
				css={` margin-bottom: ${isMobile && '2em'}; `}
			>
				<Col
					lg={8}
					xs={24}
					css={` text-align: ${isMobile && 'center'}; `}
				>
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
						<Col lg={8}>
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
					photo {
						fluid {
							src
						}
					}
					title
					seatNumber
					studentName
					studyProgram
					isAttending
					updatedAt(locale: "ID")
				}
			}
		}
	}
`
