import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { baseStyles } from '../styles'
import { Row, Col, Form, Input, Tooltip } from 'antd'
import DynamicIcon from '../components/DynamicIcon'
import { mobile } from '../utils'

const HeroSection = styled(Section)`
	padding: 4em 7em;
	.inner-box {
		margin-bottom: 5em;
		padding: 7em;
		background: ${baseStyles.secondaryColor};
	}
	.right {
		margin-top: 2em;
		.details {
			margin-bottom: 2em;
		}
	}
	.left {
		> p {
			text-transform: uppercase;
			letter-spacing: 2px;
			color: ${baseStyles.greyColor};
		}
		.ant-typography {
			line-height: 1.2;
			h4 {
				line-height: 1.2;
				font-size: 3.5em;
			}
		}
	}
`

const StyledShareIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 30px;
	height: 30px;
	border-radius: 12px;
	background-color: ${({ bg }) => bg};
	cursor: pointer;
`

const ShareIcons = styled.ul`
	padding-left: 0;
	li {
		list-style-type: none;
		display: inline-block;
		margin-right: 1em;
	}
`

const url = 'https://sg.cudy.co'
const windowFeatures = 'height=350,width=600,left=300,top=200'

const handleShareWhatsapp = text => {
	window.open(
		`whatsapp://send?text=${text}`,
		'whatsapp-popup',
		windowFeatures
	)
}

export default function Contact() {
	return (
		<Layout>
			<HeroSection>
				<Section ph="very" className="inner-box">
					<Row gutter={64} type="flex" align="middle">
						<Col lg={14} className="left">
							<p>Kontak kami</p>
							<Heading
								content={
									<span>
										Tanyakan{' '}
										<span className="underline">
											apa saja
										</span>{' '}
										yang ada di kepala. Kami selalu siap!
									</span>
								}
							/>
						</Col>
						<Col lg={10} className="right">
							<div className="details">
								<p>
									Email:{' '}
									<Tooltip title="Email kami langsung">
										<a
											className="underline"
											href="mailto:rivayudha@gmail.com?subject=Hi, Tacita! Saya mau bertanya tentang pembuatan event"
										>
											tacita@gmail.com
										</a>
									</Tooltip>
								</p>
								<p>
									Alamat:{' '}
									<Tooltip title="Lihat di Google Maps">
										<a
											className="underline"
											href="https://www.google.com/maps/dir/?api=1&destination=Jalan Kartini VI Blok C #89, Sei
			Harapan, Batam"
											target="_blank"
										>
											Jalan Kartini VI Blok C #89, Sei
											Harapan, Batam
										</a>
									</Tooltip>
								</p>
								<p>Telepon: +62 778 4324242</p>
							</div>
							<Row gutter={32} style={{ marginBottom: '2em' }}>
								<Col lg={12}>
									<ShareIcons>
										<li>
											<StyledShareIcon bg="#3c589a">
												<a
													href="https://facebook.com/rivabatam"
													target="_blank"
												>
													<DynamicIcon
														type="iconfacebook-fill"
														color="#fff"
													/>
												</a>
											</StyledShareIcon>
										</li>
										<li>
											<StyledShareIcon bg="#5eaade">
												<a
													href="https://twitter.com/rivayudha"
													target="_blank"
												>
													<DynamicIcon
														type="icontwitter-fill"
														color="#fff"
													/>
												</a>
											</StyledShareIcon>
										</li>
										<li>
											<StyledShareIcon bg="#4dc247">
												<a
													target="_blank"
													href="https://wa.me/6282113111668?text=Hi,%20Tacita!%20Saya%20mau%20bertanya%20tentang%20pembuatan%20event"
												>
													<DynamicIcon
														type="iconwhatsapp-line"
														color="#fff"
													/>
												</a>
											</StyledShareIcon>
										</li>
									</ShareIcons>
								</Col>
							</Row>
						</Col>
					</Row>
				</Section>
				<Section className="inner-box">
					<Row gutter={64}>
						<Col lg={6}>
							<Heading
								content={`Atau hubungi kami via form ${
									mobile ? 'di bawah ini' : 'di samping'
								}`}
							/>
						</Col>
						<Col lg={18}>
							<Form layout="vertical">
								<Form.Item name="name" label="Nama kamu">
									<Input
										name="name"
										placeholder="Misal: Jeni Karmila"
									/>
								</Form.Item>
								<Row gutter={32}>
									<Col lg={12}>
										<Form.Item
											name="email"
											label="Email kamu"
										>
											<Input
												name="email"
												placeholder="Misal: Jeni@example.com"
											/>
										</Form.Item>
									</Col>
									<Col lg={12}>
										<Form.Item
											name="phone"
											label="Nomor handphone kamu"
										>
											<Input
												name="phone"
												placeholder="Misal: 08122222229"
											/>
										</Form.Item>
									</Col>
								</Row>
								<Form.Item
									name="message"
									label="Apa yang mau kamu utarakan?"
								>
									<Input.TextArea
										rows={4}
										name="message"
										placeholder="Misal: Saya mau konsultasi tentang event olahraga yang akan saya adakan..."
									/>
								</Form.Item>
								<Button type="primary" icon="check">
									Kirim pertanyaan saya
								</Button>
							</Form>
						</Col>
					</Row>
				</Section>
			</HeroSection>
		</Layout>
	)
}
