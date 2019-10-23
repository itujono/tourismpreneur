import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import Layout from '../Layout'
import { Section, Heading, Card, Button } from '../components'
import styled from 'styled-components'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'
import { Link } from 'gatsby'
import blueSplatter from '../images/splatter-blue.svg'
import { media, mobile } from '../utils'

const Home = () => {
	return (
		<Layout>
			<HeroSection bg="#77b8d4">
				{mobile && <div className="overlay-on-mobile"></div>}
				<Section
					ph="very"
					style={{
						marginTop: !mobile && '3em',
						padding: mobile && '3em',
					}}
				>
					<Row gutter={32} type="flex" align="middle">
						<Col lg={8} style={{ marginBottom: mobile && '2em' }}>
							<Heading
								className="heading"
								content="Event organizer"
								headingStyles={{ marginBottom: '0.2em' }}
								subheader="Kami adalah salah satu EO terbaik di kota ini. Well, itu kata mereka. Jangan percaya mereka &mdash; kamu harus buktikan sendiri!"
							/>
							<a
								target="_blank"
								href="https://wa.me/6282113111668?text=Hi,%20Tacita!%20Saya%20mau%20bertanya%20tentang%20pembuatan%20event"
							>
								<Button type="primary">
									<Icon type="smile" /> Ngobrol dengan kami
								</Button>
							</a>
						</Col>
						{!mobile && <Col lg={8}></Col>}
						<Col lg={8} className="testimonial">
							<Card
								style={{
									width: !mobile && 250,
									margin: '0 auto',
								}}
								cover="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg"
								title="Hear from them"
								description="Saya sudah bermitra dengan Tacita sejak tahun 2015, dan sampai saat ini Tacita sudah membantu saya membuat hingga 6 event di berbagai kota..."
							/>
							<Button icon="arrow-right" shape="circle" />
						</Col>
					</Row>
				</Section>
			</HeroSection>

			<MiddleSection ph="very">
				<Row gutter={32} type="flex">
					<Col lg={8}>
						<InnerBox align="center">
							<img
								className="splatter"
								src={blueSplatter}
								alt="Biarkan Tacita yang merancang event kamu"
							/>
							<div className="image">
								<img
									src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5cfe97c2b4e53beb6d4389a7_crew.jpg"
									width="200"
									alt="What is Tacita?"
								/>
							</div>
						</InnerBox>
					</Col>
					<Col lg={8}>
						<img
							src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5d81401d08863e1d917f691c_how%20it%20works-min.jpg"
							width="100%"
							alt="Know Tacita closer"
						/>
					</Col>
					<Col lg={8} className="event-is-hard">
						{/* prettier-ignore */}
						<Heading
							content={<span>Ngadain{' '} <span className="underline"> event itu berat </span> . Biar kami saja.</span>}
							level={1}
						/>
						{/* <InnerBox align="center" justify="center"> */}
						<p>
							Bagian ini nggak tau mau diisi dengan copywriting apa. Semoga{' '}
							<span className="underline">amal ibadah para hadirin solat Jumat</span> diterima sepantasnya
							dan selayaknya. Thanks. <br />
							<br /> Tacita uses a carefully selected shirt library, unique print processes, and simple
							order process to make it easier than ever to order shirts you'll love and wear proudly.
						</p>
					</Col>
				</Row>
			</MiddleSection>

			<ReviewSection ph="very" bg={baseStyles.secondaryColor}>
				<Section ph="very">
					<Row type="flex" justify="center" align="middle">
						<Col lg={8}>
							<ReviewCard>
								<Heading
									content="Apa kata mereka"
									subheader="Tacita is one of the best. Superb customer service too, very responsive and the nicest people from here to Timbuktu. Will order again. And again. HUGE THANKS TACITA! ❤️"
									marginBottom="4em"
								/>
								<Row gutter={32} className="reviewer-section" type="flex" align="middle">
									<Col lg={8}>
										<Avatar
											size="default"
											src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5ced36d63d602ded8a75be9f_Team-Orange-Nick-Forneris-p-500.jpeg"
										/>
									</Col>
									<Col lg={16}>
										<Heading
											className="reviewer"
											content="Felix Zainuddin"
											subheader="Pejaten, DKI Jakarta"
											marginBottom="0"
										/>
									</Col>
								</Row>
							</ReviewCard>
						</Col>
						<Col lg={10}>
							<StyledReviewImage>
								<img
									src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf18dcf08fa33b11d4b8be1_threefivetwo.jpg"
									width="100%"
									alt="Review"
								/>
							</StyledReviewImage>
						</Col>
					</Row>
				</Section>
			</ReviewSection>
			<CTASection ph="very" style={{ height: mobile ? 'auto' : 300 }}>
				<CallToAction>
					<Row gutter={120} type="flex" align="middle">
						<Col lg={16}>
							<Heading
								content={
									<span>
										Sudah siap untuk <span className="underline">nge-host event terkeren</span> di
										kotamu?
									</span>
								}
								marginBottom={!mobile && '0'}
							/>
						</Col>
						<Col lg={6}>
							<Link to="/contact">
								<Button block type="primary">
									<DynamicIcon type="iconicon_comment" />
									Hubungi kami
								</Button>
							</Link>
						</Col>
					</Row>
				</CallToAction>
			</CTASection>
		</Layout>
	)
}

export default Home

const HeroSection = styled(Section)`
	height: 100vh;
	background: url('https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cdaba596d9f35a12997b809_masthead-pop-parlour-compressor-p-1600.jpeg')
		center no-repeat;
	background-size: cover;
	position: relative;
	.testimonial {
		position: relative;
		.ant-btn {
			position: absolute;
			bottom: -25px;
			right: 100px;
		}
	}
	.heading {
		h4 {
			font-size: 5em;
			line-height: 1;
			margin-bottom: 0.5em;
			color: #fff;
		}
		p {
			font-size: 1.4em;
			color: #fff;
		}
	}

	${media.mobile`
		&& {
			padding: 0;
			margin-bottom: 2em;
			height: 120vh;
			.heading {
				h4 {
					font-size: 3em;
				}
			}
		}
		.overlay-on-mobile {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
		}
	`}
`

const InnerBox = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: ${({ align }) => align || 'flex-end'};
	justify-content: ${({ justify }) => justify || 'flex-end'};
	.image {
		position: relative;
	}
	.splatter {
		position: absolute;
		left: 30%;
		top: 40%;
		width: 150px;
		z-index: 0;
	}

	${media.mobile`
		margin-bottom: 2em;
		.image {
			right: -100px;
		}
		.splatter {
			left: 10%;
		}
	`}
`

const MiddleSection = styled(Section)`
	.event-is-hard {
		article.ant-typography {
			width: 90%;
			margin-top: 50px;
			margin-left: -120px;
		}
	}

	${media.mobile`
		.event-is-hard {
			article.ant-typography {
				margin-left: initial;
			}
		}
	`}
`

const ReviewSection = styled(Section)`
	padding-top: 4em;
	padding-bottom: 12em;

	${media.mobile`
			padding-top: 2em;
			padding-bottom: 2em;
	`}
`

const ReviewCard = styled.div`
	line-height: 1.8;
	background: ${baseStyles.lightGrey.two};
	padding: 3em 4em;
	margin-right: -50px;
	position: relative;
	z-index: 2;
	box-shadow: ${baseStyles.boxShadow.main};
	&& {
		h4 {
			margin-bottom: 1.2em;
		}
	}
	.reviewer-section {
		.reviewer {
			line-height: initial;
			h4 {
				margin-bottom: initial;
			}
			p {
				margin-bottom: 0;
				color: ${baseStyles.greyColor};
			}
		}
		.ant-avatar {
			width: 70px;
			height: 70px;
		}
	}

	${media.mobile`
		margin-right: initial;
	`}
`

const StyledReviewImage = styled.div`
	width: 450px;
	height: 450px;

	${media.mobile`
		width: 100%;
	`}
`

const CTASection = styled(Section)`
	height: 300px;

	${media.mobile`
		height: auto;
	`}
`

const CallToAction = styled.div`
	margin-top: -80px;
	background: #77b8d4;
	border-radius: 12px;
	padding: 3em 5em;
	box-shadow: ${baseStyles.boxShadow.main};
	.ant-typography {
		font-size: 1.7em;
		line-height: 1.2;
		color: #fff;
	}
	.ant-btn {
		background: #fff;
		border-color: #fff;
		color: ${baseStyles.primaryColor};
	}

	${media.mobile`
		margin-top: initial;
		padding: 2em;
	`}
`
