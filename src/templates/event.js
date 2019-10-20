import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Heading, Section } from '../components'
import Tag from '../components/Tag'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'
import { Row, Col, Icon } from 'antd'
import { graphql } from 'gatsby'
import RichText from '../components/RichText'

const FeaturedSection = styled(Section)`
	max-height: 350px;
	overflow-y: hidden;
	z-index: 0;
	position: relative;
	img {
		object-fit: cover;
		height: 350px;
	}
`

const TitleSection = styled(Section)`
	padding: 4em 5em;
	background-color: #fff;
	box-shadow: ${baseStyles.boxShadow.main};
	width: 50%;
	margin: -80px auto 3em auto;
	position: relative;
	z-index: 1;
	.date {
		display: flex;
		align-items: center;
		color: ${baseStyles.greyColor};
		.anticon {
			margin-right: 0.5em;
		}
	}
`

const ContentSection = styled(Section)`
	padding: 2em;
	width: 50%;
	margin: 0 auto;
	line-height: 1.8;
	article {
		margin-bottom: 2em;
	}
`

export default function Event({ data: { contentfulEvent: event = {} } }) {
	// prettier-ignore
	const { featuredImage, client, description, title, tags, fromDate, toDate, updatedAt } = event

	return (
		<Layout>
			<FeaturedSection noPadding>
				<img
					src={featuredImage.fluid.src}
					width="100%"
					alt="featured"
				/>
			</FeaturedSection>
			<TitleSection>
				<p className="date">
					<DynamicIcon type="iconicon_date" /> &nbsp; {fromDate} -{' '}
					{toDate}
				</p>
				<Heading content={title} level={1} />
				<Row type="flex" justify="space-between" align="middle">
					<Col lg={8}>
						<div>
							{tags.map(item => (
								<Tag color="#f50">{item}</Tag>
							))}
						</div>
					</Col>
					<Col lg={8} style={{ textAlign: 'right' }}>
						<div>Klien: {client}</div>
					</Col>
				</Row>
			</TitleSection>
			<ContentSection>
				<article>
					<RichText description={description} />
				</article>
				<Row>
					<Col>
						<code>Last update: {updatedAt}</code>
					</Col>
				</Row>
			</ContentSection>
			<Row type="flex" justify="center">
				<Col lg={8} style={{ textAlign: 'center' }}>
					<Icon type="ellipsis" style={{ fontSize: '2em' }} />
				</Col>
			</Row>
		</Layout>
	)
}

export const queryEvent = graphql`
	query queryEvent($id: String!) {
		contentfulEvent(id: { eq: $id }) {
			client
			id
			title
			tags
			featuredImage {
				fluid {
					src
				}
			}
			fromDate(formatString: "DD MMM YYYY")
			toDate(formatString: "DD MMM YYYY")
			description {
				json
				description
			}
			updatedAt(formatString: "DD MMM YYYY")
		}
	}
`
