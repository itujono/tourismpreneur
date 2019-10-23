import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { baseStyles } from '../styles'
import { Row, Col, Form, Tooltip, message } from 'antd'
import DynamicIcon from '../components/DynamicIcon'
import { mobile, media } from '../utils'
import TextInput from '../components/TextInput'
import { navigate } from 'gatsby'

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

	${media.mobile`
		.inner-box {
			padding: 2em;
		}
	`}
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

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

export default function Contact() {
	const [formValues, setFormValues] = useState({})

	const handleChange = name => e => {
		setFormValues({ ...formValues, [name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...formValues,
			}),
		})
			.then(() =>
				message.loading('Okay mohon tunggu...').then(() => {
					navigate(form.getAttribute('action'))
				})
			)
			.then(() =>
				message.success(
					'Oke, message kamu udah berhasil dikirim. Tunggu kabar dari kami yaa, dan kami akan segera menghubungi kamu :)'
				)
			)
			.catch(error => message.error(error))
	}

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
										Tanyakan <span className="underline">apa saja</span> yang ada di kepala. Kami
										selalu siap!
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
											href="https://www.google.com/maps/dir/?api=1&destination=Jalan Kartini VI Blok C #89, Sei Harapan, Batam"
											target="_blank"
										>
											Jalan Kartini VI Blok C #89, Sei Harapan, Batam
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
												<a href="https://facebook.com/rivabatam" target="_blank">
													<DynamicIcon type="iconfacebook-fill" color="#fff" />
												</a>
											</StyledShareIcon>
										</li>
										<li>
											<StyledShareIcon bg="#5eaade">
												<a href="https://twitter.com/rivayudha" target="_blank">
													<DynamicIcon type="icontwitter-fill" color="#fff" />
												</a>
											</StyledShareIcon>
										</li>
										<li>
											<StyledShareIcon bg="#4dc247">
												<a
													target="_blank"
													href="https://wa.me/6282113111668?text=Hi,%20Tacita!%20Saya%20mau%20bertanya%20tentang%20pembuatan%20event"
												>
													<DynamicIcon type="iconwhatsapp-line" color="#fff" />
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
							<Heading content={`Atau hubungi kami via form ${mobile ? 'di bawah ini' : 'di samping'}`} />
						</Col>
						<Col lg={18}>
							<Form
								layout="vertical"
								name="contact"
								onSubmit={handleSubmit}
								layout="vertical"
								data-netlify="true"
								data-netlify-honeypot="bot-field"
							>
								<input type="hidden" name="form-name" value="contact" />

								<TextInput
									name="name"
									label="Nama kamu"
									placeholder="Misal: Jeni Karmila"
									onChange={handleChange('name')}
								/>
								<Row gutter={32}>
									<Col lg={12}>
										<TextInput
											name="email"
											label="Email kamu"
											placeholder="Misal: jeni@example.com"
											onChange={handleChange('email')}
										/>
									</Col>
									<Col lg={12}>
										<TextInput
											name="phone"
											label="Nomor handphone kamu"
											placeholder="Misal: 08122222229"
											onChange={handleChange('phone')}
										/>
									</Col>
								</Row>
								<TextInput
									textarea
									name="message"
									label="Apa yang mau kamu utarakan?"
									placeholder="Misal: Saya mau konsultasi tentang event olahraga yang akan saya adakan..."
									onChange={handleChange('message')}
								/>
								<Section ph={0} textAlign={mobile && 'center'}>
									<Button
										type="primary"
										icon="check"
										block={mobile}
										htmlType="submit"
										style={{
											marginBottom: mobile && '1em',
										}}
									>
										Kirim pertanyaan saya
									</Button>{' '}
									&nbsp; Atau{' '}
									<a
										className="underline"
										target="_blank"
										href="https://wa.me/6282113111668?text=Hi,%20Tacita!%20Saya%20mau%20bertanya%20tentang%20pembuatan%20event"
									>
										whatsapp saja langsung
									</a>
								</Section>
							</Form>
						</Col>
					</Row>
				</Section>
			</HeroSection>
		</Layout>
	)
}
