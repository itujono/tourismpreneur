import React, { useEffect } from 'react'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { Icon, Row, Col } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'
import scenery from '../images/scenery.png'

const MainSection = styled(Section)`
	height: 100vh;
	padding-top: 0;
	text-align: center;
`

const MiddleRow = styled(Row)`
	height: 100vh;
`

function Home() {
	useEffect(() => {}, [])

	return (
		<Layout basic>
			<MainSection centered>
				<MiddleRow type="flex" align="middle" justify="center">
					<Col lg={12}>
						<Section
							centered
							css={`
								margin-top: -120px;
								padding-top: 0;
								margin-bottom: 2em;
								text-align: center;
							`}
						>
							<img src={scenery} width="180" alt="Welcome to wisuda 4.0" />
						</Section>
						<Heading content="Selamat datang di Wisuda 4.0" subheader="Lihat daftar semua tamu undangan" />
						<Button type="primary">
							<Link to="/guests">
								Lihat semua <Icon type="arrow-right" />
							</Link>
						</Button>
					</Col>
				</MiddleRow>
			</MainSection>
		</Layout>
	)
}

export default Home
