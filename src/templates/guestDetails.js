import React from 'react'
import { Section, Heading, Button } from '../components'
import { Row, Col, Tag, Popconfirm } from 'antd'
import styled from 'styled-components'
import { baseStyles } from '../styles'
import { media } from '../utils'

const MainSection = styled(Section)`
	height: 100vh;
	padding-top: 0;
	width: 80%;
	display: flex;
	align-items: center;
	${media.mobile`
        height: inherit;
        width: 100%;
    `}
`

const Card = styled.div`
	max-height: 500px;
	border-radius: 10px;
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
		.ant-row-flex {
			margin-bottom: 2em;
		}
	}
`

const ChairNumber = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 100px;
	background-color: ${baseStyles.primaryColor};
	font-size: 1.2em;
	display: flex;
	justify-content: center;
	align-items: center;
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

function GuestDetails({ pageContext = {} }) {
	const guest = pageContext.guest || {}
	return (
		<MainSection centered>
			<Card>
				<Row gutter={32}>
					<Col lg={12} className="image-section">
						<img src={(guest.photo.fields || {}).file.url || ''} width="100%" alt="Sempardak" />
					</Col>
					<Col lg={12} className="info-section">
						<Section>
							<Row type="flex" justify="space-between" align="middle">
								<Col lg={12}>
									<Heading content={guest.name} marginBottom="0.5em" />
									<Tag color="#2db7f5">{guest.title}</Tag>
								</Col>
								<Col lg={12} style={{ textAlign: 'right' }}>
									<ChairNumber>{guest.seatNumber}</ChairNumber>
								</Col>
							</Row>
							<Row type="flex" justify="space-between" align="middle">
								<Col lg={24}>
									{guest.studentName && (
										<Alert>
											<p>
												Orang tua dari <strong>{guest.studentName}</strong> (Fakultas{' '}
												<strong>{guest.major}</strong>, jurusan{' '}
												<strong>{guest.designation}</strong>)
											</p>
										</Alert>
									)}
								</Col>
							</Row>
							<Row type="flex" justify="space-between" align="middle">
								<Col lg={24}>
									<p>Apakah anda bersedia menghadiri acaranya?</p>
									<Popconfirm
										title="Yakin ingin menghadiri?"
										okText="Ya"
										cancelText="Batal"
										onCancel={() => ({})}
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
							</Row>
						</Section>
					</Col>
				</Row>
			</Card>
		</MainSection>
	)
}

export default GuestDetails
