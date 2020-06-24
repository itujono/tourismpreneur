import React, { useState, useEffect, createRef } from 'react'
import { Section, Heading, Button } from '../components'
import { Row, Col, Tag, Popconfirm, Icon } from 'antd'
import styled from 'styled-components'
import { baseStyles } from '../styles'
import { media } from '../utils'
import { graphql, Link } from 'gatsby'
import lottie from 'lottie-web'
import success from '../images/success-animation.json'
import useMedia from 'use-media'
import userPic from '../images/tutor-object.png'

const MainSection = styled(Section)`
	height: 100vh;
	padding-top: 0;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	${media.mobile`
        height: inherit;
        width: 100%;
		margin-top: 5em;
    `}
`

const Card = styled.div`
	background-color: #fff;
	max-height: 500px;
	min-width: 50%;
	border-radius: 10px;
	padding: ${({ isSubmitted }) => isSubmitted && '2em'};
	box-shadow: ${baseStyles.boxShadow.main};
	.image-section {
		overflow: hidden;
		height: 500px;
		img {
			border-radius: 8px 0 0 8px;
			height: 100%;
			object-fit: cover;
		}
	}
	.info-section {
		text-align: left;
		padding: 3em;
		padding-top: 1em;
		padding-bottom: 0;
		.success {
			width: 100%;
			height: 150px;
			margin-top: -100px;
			margin-bottom: 3em;
		}
		> section {
			padding-left: 2em;
			padding-right: 2em;
		}
		.ant-row-flex {
			margin-bottom: 2em;
		}
	}
`

const ChairNumber = styled.div`
	width: 130px;
	height: 130px;
	border-radius: 100px;
	background-color: ${baseStyles.primaryColor};
	font-size: 2.8em;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: right;
`

const Alert = styled.section`
	padding: 2em;
	border-radius: 10px;
	background: ${baseStyles.lightGrey.one};
	margin-bottom: 3em;
	p {
		margin-bottom: 0;
	}
`

function GuestDetails({ location, data: { contentfulGuest: guest = {} } }) {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const isSpecialGuest = guest.ticketPurchased === 'VIP' || guest.ticketPurchased === 'VVIP'
	const params = new URLSearchParams(location.search)
	const goToSeatNumber = params.get('seatNumber')
	const animContainer = createRef()

	const thanks = <span>Terima kasih, {guest.name}</span>

	useEffect(() => {
		lottie.loadAnimation({
			container: animContainer.current, // current instance of our container!
			animationData: success, // animation file!
			renderer: 'svg',
			loop: true,
			autoplay: true,
		})
	}, [])

	return (
		<MainSection centered>
			<Card isSubmitted={isSubmitted} isSpecialGuest={isSpecialGuest}>
				{isSubmitted ? (
					<Row gutter={32} type="flex" justify="center">
						<Col lg={20} style={{ textAlign: 'center' }}>
							<Heading
								content={thanks}
								subheader="Anda sudah terkonfirmasi di dalam buku tamu kami. Nomor kursi Anda:"
								marginBottom="2em"
							/>
							<ChairNumber isSubmitted={isSubmitted}>{guest.seatNumber}</ChairNumber>
							<Link to="/">
								<Icon type="home" />
								&nbsp; Kembali ke Home
							</Link>
						</Col>
					</Row>
				) : (
					<Row gutter={32}>
						<Col lg={24} className="info-section">
							<Section>
								<div className="success" ref={animContainer} />
								<Row type="flex" justify="space-between" align="middle">
									<Col lg={12}>
										<Heading content={guest.name} marginBottom="0.5em" />
										<Tag color="#2db7f5">{guest.phoneNumber}</Tag>
									</Col>
									<Col lg={12}>
										<ChairNumber>{guest.ticketPurchased}</ChairNumber>
									</Col>
								</Row>

								{/* <Row type="flex" justify="space-between" align="middle">
									<Col lg={24}>
										<p>Apakah anda bersedia menghadiri acaranya?</p>
										<Popconfirm
											title="Yakin ingin menghadiri?"
											okText="Ya"
											cancelText="Batal"
											onCancel={() => ({})}
											onConfirm={handleSubmit}
										>
											<Button type="primary">Ya, saya bersedia</Button>
										</Popconfirm>{' '}
										&nbsp;{' '}
										<Popconfirm
											title="Yakin tidak ingin menghadiri?"
											okText="Ya"
											cancelText="Batal"
											onCancel={() => ({})}
										>
											<Button type="link">Tidak</Button>
										</Popconfirm>
									</Col>
								</Row> */}
							</Section>
						</Col>
					</Row>
				)}
			</Card>
		</MainSection>
	)
}

export default GuestDetails

export const queryGuest = graphql`
	query queryGuest($id: String!) {
		contentfulGuest(id: { eq: $id }) {
			id
			name
			phoneNumber
			ticketPurchased
			hour
		}
	}
`
