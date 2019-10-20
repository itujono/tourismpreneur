import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Heading, Section } from '../components'
import Tag from '../components/Tag'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'
import { Row, Col, Icon } from 'antd'

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

export default function Event({ data }) {
	return (
		<Layout>
			<FeaturedSection noPadding>
				<img
					src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg"
					width="100%"
					alt="featured"
				/>
			</FeaturedSection>
			<TitleSection>
				<p className="date">
					<DynamicIcon type="iconicon_date" /> &nbsp; 9 October 2019 -
					11 October 2019
				</p>
				<Heading
					content="Coba-coba main sama minyak kayu putih tak terlalu baik untuk badan gembul"
					level={1}
				/>
				<div>
					<Tag color="#f50">Culinary</Tag>
					<Tag color="#2db7f5">Corporate</Tag>
				</div>
			</TitleSection>
			<ContentSection>
				<article>
					<p>
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content
						here', making it look like readable English.{' '}
					</p>
					<p>
						Many desktop publishing packages and web page editors
						now use Lorem Ipsum as their default model text, and a
						search for 'lorem ipsum' will uncover many web sites
						still in their infancy. Various versions have evolved
						over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).
					</p>
					<p>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration in
						some form, by injected humour, or randomised words which
						don't look even slightly believable. If you are going to
						use a passage of Lorem Ipsum, you need to be sure there
						isn't anything embarrassing hidden in the middle of
						text. All the Lorem Ipsum generators on the Internet
						tend to repeat predefined chunks as necessary, making
						this the first true generator on the Internet.
					</p>
				</article>
			</ContentSection>
			<Row type="flex" justify="center">
				<Col lg={8} style={{ textAlign: 'center' }}>
					<Icon type="ellipsis" style={{ fontSize: '2em' }} />
				</Col>
			</Row>
		</Layout>
	)
}
