import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import { Section, Heading } from '../components'
import { Row, Col, Divider } from 'antd'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'

const HeroSection = styled(Section)`
	padding: 7em 8em;
`

const HeroCard = styled.div`
	background: #fff;
	.left {
		padding: 5em 7em;
		> p {
			text-transform: uppercase;
			letter-spacing: 2px;
		}
		.ant-typography {
			h1 {
				margin-bottom: 0.5em;
				font-size: 4em;
			}
			> p {
				line-height: 1.8;
			}
		}
	}
`

const VisionMission = styled(Section)`
	.vision-mission {
		.ant-typography {
			h4 {
				text-transform: uppercase;
				font-size: 1em;
				margin-bottom: 1.5em;
				letter-spacing: 2px;
				font-family: 'Futura Medium', Arial, Helvetica, sans-serif;
				color: ${baseStyles.greyColor};
			}
			p {
				font-size: 1.4em;
				color: ${baseStyles.primaryColor};
			}
		}
	}
`

const QuoteyText = styled.div`
	padding: 4em;
	background: ${baseStyles.secondaryColor};
	width: 400px;
	height: auto;
	margin: 0 auto;
	margin-top: -80px;
	position: relative;
	z-index: 2;
	h4 {
		line-height: 1.8;
	}
`

const CommitmentSection = styled.div`
	display: flex;
	align-items: center;
	padding: 6em 8em;
	background: ${baseStyles.primaryColor};
	text-align: center;
	color: #fff;
	height: 100%;
	.ant-typography {
		line-height: 1.8;
		color: #fff;
	}
`

export default function About() {
	const heroText = (
		<>
			<p>
				TACITA ENTERPRISE adalah{' '}
				<span className="underline">Event Organizer</span> yang berbasis
				di Batam. Kompetensi kami telah teruji selama bertahun-tahun.
				Kami bukan fresh graduate di dunia Event Organiser. Latar
				belakang kami adalah ‘Pekerja Event’, MC, Sales, Pekerja Media
				serta graphic designer. Dengan ragam latar belakang, kami{' '}
				<span className="underline">
					mengikatkan diri dalam satu wadah
				</span>{' '}
				bernama TACITA Event Organizer.
			</p>
			<p>
				Kami hadir sebagai solusi kreatif untuk membantu{' '}
				<span className="underline">
					mengkomunikasikan kebutuhan promosi dan membangun image
					positif perusahaan Anda ke konsumen
				</span>{' '}
				serta masyarakat secara luas melalui event-event promosi dan
				kegiatan alternatif lainnya.
			</p>
		</>
	)

	const missionText = (
		<ul>
			<li>
				Menyediakan layanan promosi melalui event secara mudah, cepat
				dan lengkap.
			</li>
			<li>
				Membangun image dan citra positif perusahaan atau perorangan
				melalui kegiatan promosi.
			</li>
			<li>
				Mengkreasi dan menggali ide-ide baru sebagai sarana promosi.{' '}
			</li>
		</ul>
	)

	const commitmentText = (
		<>
			<p>
				Bagi kami Customer adalah arah bagi semua yang kami lakukan saat
				sekarang dan di masa yang akan datang. TACITA Event Organizer
				sangat menghormati komitmen, pengetahuan dan kreativitas dari
				semua pihak yang terlibat. Kami meyakini bahwa{' '}
				<span className="underline inherit">
					semua orang mempunyai bakat dan kemampuan untuk memberi
					andil
				</span>{' '}
				bagi terciptanya misi kami.
			</p>
			<p>
				Bagi kami kerjasama dan rasa hormat di antara individu merupakan
				landasan utama bagi semua keberhasilan. Hal inilah yang membuat
				kami{' '}
				<span className="underline inherit">
					selalu dipercaya oleh perusahaan-perusahaan berskala
					Nasional dan Internasional
				</span>{' '}
				hingga saat ini.
			</p>
		</>
	)

	return (
		<Layout>
			<HeroSection>
				<HeroCard>
					<Row>
						<Col lg={14} className="left">
							<p>Our company</p>
							<Heading
								level={1}
								content="Organized locally, held globally"
								subheader={heroText}
							/>
						</Col>
						<Col lg={10}>
							<img
								src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f943f3c81c9b_about-masthead.jpg"
								width="100%"
								alt="Our company - Tacita"
							/>
						</Col>
					</Row>
				</HeroCard>
			</HeroSection>
			<Row type="flex" justify="center">
				<Col lg={16}>
					<Section textAlign="center">
						<div style={{ marginBottom: '2em' }}>
							<DynamicIcon type="iconicon_video" size="6em" />
						</div>
						<Heading
							level={1}
							content={
								<span>
									We don't make events. We{' '}
									<span className="underline">
										make happiness
									</span>
									.
								</span>
							}
							headingStyles={{ fontSize: '4em' }}
						/>
					</Section>
				</Col>
			</Row>
			<VisionMission ph="very">
				<Row gutter={120} type="flex" justify="center" align="middle">
					<Col lg={12}>
						<img
							src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f96172c81ca3_passion-01.jpg"
							width="100%"
							alt="Visi dan misi Tacita"
						/>
					</Col>
					<Col lg={10} className="vision-mission">
						<Heading
							content="Visi kami"
							subheader="Menjadi Event Organizer yang Profesional, Berkualitas, Menghibur dan Terpercaya."
						/>
						<Divider />
						<Heading content="Misi kami" subheader={missionText} />
					</Col>
				</Row>
			</VisionMission>
			<QuoteyText>
				<Heading
					content={
						<span>
							Lebih dari ratusan event telah kami kerjakan, hingga
							membuat kami semakin kokoh dan{' '}
							<span className="underline">
								dipercaya oleh puluhan perusahaan nasional
							</span>{' '}
							yang hingga kini menjadi klien tetap kami.
						</span>
					}
				/>
			</QuoteyText>
			<Row type="flex" style={{ marginTop: '-70px' }}>
				<Col lg={12}>
					<CommitmentSection>
						<Heading
							headingStyles={{
								marginBottom: '1em',
								fontSize: '2em',
							}}
							content="Komitmen kami"
							subheader={commitmentText}
						/>
					</CommitmentSection>
				</Col>
				<Col lg={12}>
					<img
						src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f9ea0fc81c81_production-01.jpg"
						width="100%"
						alt="Tacita's commitment"
					/>
				</Col>
			</Row>
		</Layout>
	)
}
