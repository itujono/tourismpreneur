import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import { Section, Heading } from '../components'
import { Row, Col } from 'antd'
import { baseStyles } from '../styles'

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
				font-size: 1.2em;
				letter-spacing: 2px;
				color: ${baseStyles.greyColor};
			}
			p {
				font-size: 1.4em;
				color: ${baseStyles.primaryColor};
			}
		}
	}
`

export default function About() {
	const heroText = (
		<>
			<p>
				TACITA ENTERPRISE adalah Event Organizer yang bebasis di Batam.
				Kompetensi kami telah teruji selama bertahun-tahun. Kami bukan
				fresh graduate di dunia Event Organiser. Latar belakang kami
				adalah ‘Pekerja Event’, MC, Sales, Pekerja Media serta graphic
				designer. Dengan ragam latar belakang, kami mengikatkan diri
				dalam satu wadah bernama TACITA Event Organizer.
			</p>
			<p>
				Kami hadir sebagai solusi kreatif untuk membantu
				mengkomunikasikan kebutuhan promosi dan membangun image positif
				perusahaan Anda ke konsumen serta masyarakat secara luas melalui
				event-event promosi dan kegiatan alternatif lainnya.
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
						<Heading
							level={1}
							content="We don't make events. We make happiness."
							headingStyles={{ fontSize: '4em' }}
						/>
					</Section>
				</Col>
			</Row>
			<VisionMission ph="very">
				<Row gutter={64} type="flex" justify="center" align="middle">
					<Col lg={10}>
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
						<Heading content="Misi kami" subheader={missionText} />
					</Col>
				</Row>
			</VisionMission>
		</Layout>
	)
}
