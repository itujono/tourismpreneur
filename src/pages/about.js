import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import { Section, Heading } from '../components'
import { Row, Col, Divider } from 'antd'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'
import { media, mobile } from '../utils'
import { graphql } from 'gatsby'
import RichText from '../components/RichText'

const HeroSection = styled(Section)`
	padding: 7em 8em;

	${media.mobile`
		padding: 2em;
	`}
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

	${media.mobile`
		.left {
			padding: 2em;
		}
	`}
`

const HappinessSection = styled(Section)`
	article.ant-typography {
		line-height: 1.2;
		> h1 {
			font-size: 4em;
		}
	}

	${media.mobile`
		article.ant-typography {
			line-height: 1.1
			> h1 {
				line-height: 1.1
			}
		}
	`}
`

const VisionMission = styled(Section)`
	/* padding: 0; */
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
				font-size: 1.2em;
				color: ${baseStyles.primaryColor};
			}
		}
	}

	${media.mobile`
		&& {
			.vision-mission {
				padding: 4em;
				.ant-typography {
					p {
						font-size: initial;
						color: ${baseStyles.primaryColor};
					}
				}
			}
		}
	`}
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

	${media.mobile`
		margin-top: initial;
		width: 100%;
	`}
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
	article {
		span.underline {
			color: #fff;
		}
	}

	${media.mobile`
		padding: 2em;
	`}
`

export default function About({
	data: {
		contentfulOurCompanyPageAbout = {},
		contentfulOurCommitmentPageAbout = {},
		contentfulQuotePageAbout = {},
		contentfulVisiMisiPageAbout = {},
	},
}) {
	const {
		title,
		description,
		image: { fluid = {} },
	} = contentfulOurCompanyPageAbout
	const {
		title: titleCommitment,
		description: descCommitment,
		image: { fluid: fluidCommitment = {} },
	} = contentfulOurCommitmentPageAbout
	const {
		title: titleVisiMisi,
		visiTitle,
		visiDescription,
		misiTitle,
		misiDescription,
		image: { fluid: fluidVisiMisi = {} },
	} = contentfulVisiMisiPageAbout
	const { quote } = contentfulQuotePageAbout

	const heroText = (
		<article>
			<RichText description={description} />
		</article>
	)

	const commitmentText = (
		<article>
			<RichText description={descCommitment} />
		</article>
	)

	return (
		<Layout>
			<HeroSection>
				<HeroCard>
					<Row type="flex">
						<Col lg={14} className="left">
							<p>Our company</p>
							<Heading level={1} content={title} subheader={heroText} />
						</Col>
						<Col lg={10}>
							<img
								src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f943f3c81c9b_about-masthead.jpg"
								width="100%"
								height="100%"
								css={`
									object-fit: cover;
								`}
								alt="Our company - Tacita"
							/>
						</Col>
					</Row>
				</HeroCard>
			</HeroSection>
			<Row type="flex" justify="center">
				<Col lg={14}>
					<HappinessSection textAlign="center">
						<div style={{ marginBottom: '2em' }}>
							<DynamicIcon type="iconicon_video" size="6em" />
						</div>
						<Heading level={1} content={<RichText description={titleVisiMisi} />} />
					</HappinessSection>
				</Col>
			</Row>
			<VisionMission ph="very">
				<Row gutter={!mobile && 120} type="flex" justify="center" align="middle">
					<Col lg={12} style={{ marginBottom: mobile && '2em' }}>
						<img src={fluidVisiMisi.src} width="100%" alt="Visi dan misi Tacita" />
					</Col>
					<Col lg={10} className="vision-mission">
						<Heading content={visiTitle} subheader={<RichText description={visiDescription} />} />
						<Divider />
						<Heading content={misiTitle} subheader={<RichText description={misiDescription} />} />
					</Col>
				</Row>
			</VisionMission>
			<QuoteyText>
				<Heading content={<RichText description={quote} />} />
			</QuoteyText>
			<Row type="flex" style={{ marginTop: !mobile && '-70px' }}>
				<Col lg={12}>
					<CommitmentSection>
						<Heading
							headingStyles={{
								marginBottom: '1em',
								fontSize: '2em',
							}}
							content={titleCommitment}
							subheader={commitmentText}
						/>
					</CommitmentSection>
				</Col>
				<Col lg={12}>
					<img src={fluidCommitment.src} width="100%" alt="Tacita's commitment" />
				</Col>
			</Row>
		</Layout>
	)
}

export const queryAbout = graphql`
	query queryAbout {
		contentfulOurCompanyPageAbout {
			title
			description {
				json
			}
			image {
				fluid {
					src
				}
			}
		}

		contentfulOurCommitmentPageAbout {
			title
			description {
				json
			}
			image {
				fluid {
					src
				}
			}
		}

		contentfulQuotePageAbout {
			quote {
				json
			}
		}

		contentfulVisiMisiPageAbout {
			title {
				json
			}
			visiTitle
			visiDescription {
				json
			}
			misiTitle
			misiDescription {
				json
			}
			image {
				fluid {
					src
				}
			}
		}
	}
`
