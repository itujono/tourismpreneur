import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../Layout'
import { Button, Section, Heading, Card } from '../components'
import styled from 'styled-components'

const HeroSection = styled(Section)`
	height: 100vh;
	.heading {
		h4 {
			font-size: 5em;
			line-height: 1;
			margin-bottom: 0.5em;
			color: #fff;
		}
		p {
			font-size: 2em;
		}
	}
`

const Home = () => {
	return (
		<Layout>
			<HeroSection bg="#77b8d4">
				<Section ph="very">
					<Row gutter={32} type="flex" align="middle">
						<Col lg={8}>
							<Heading
								className="heading"
								content="Event organizer"
								subheader="We are one of the best EO in town, they say."
							/>
						</Col>
						<Col lg={8}>Eheheh</Col>
						<Col lg={8}>
							<Card
								style={{ width: 250, margin: '0 auto' }}
								cover="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg"
								title="Hear from them"
								description="Kan mantap kalo bisa begini, kenapa juga mesti begitu. Sip kan?"
							/>
						</Col>
					</Row>
				</Section>
			</HeroSection>
		</Layout>
	)
}

export default Home
