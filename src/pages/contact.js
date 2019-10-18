import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { baseStyles } from '../styles'
import { Row, Col, Form, Input } from 'antd'
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

export default function Contact() {
	return (
		<Layout>
			<HeroSection>
				<Section ph="very" className="inner-box">
					<Row gutter={32}>
						<Col lg={12} className="left">
							<p>Kontak kami</p>
							<Heading content="Tanyakan apa saja yang ada di kepala. Kami selalu siap!" />
						</Col>
						<Col lg={12} className="right">
							<div className="details">
								<p>Email: tacita@gmail.com</p>
								<p>
									Alamat: Jalan Kartini VI Blok C #89, Sei
									Harapan, Batam
								</p>
								<p>Telepon: +62 778 4324242</p>
							</div>
							<Row gutter={32} style={{ marginBottom: '2em' }}>
								<Col lg={4}>
									<StyledShareIcon
										bg="#3c589a"
										onClick={() => ({})}
									>
										<DynamicIcon
											type="icon-facebook-fill"
											color="#fff"
										/>
									</StyledShareIcon>
								</Col>
								<Col lg={4}>
									<StyledShareIcon
										bg="#5eaade"
										onClick={() => ({})}
									>
										<DynamicIcon
											type="icon-twitter-fill"
											color="#fff"
										/>
									</StyledShareIcon>
								</Col>
								<Col lg={4}>
									<StyledShareIcon
										bg="#4dc247"
										onClick={() => ({})}
									>
										<DynamicIcon
											type="icon-whatsapp-line"
											color="#fff"
										/>
									</StyledShareIcon>
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
