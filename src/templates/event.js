import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { Heading, Section } from '../components'

const FeaturedSection = styled(Section)`
	max-height: 350px;
	overflow-y: hidden;
	img {
		object-fit: cover;
		height: 350px;
	}
`

export default function Event() {
	return (
		<Layout>
			<FeaturedSection noPadding>
				<img
					src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg"
					width="100%"
					alt="featured"
				/>
			</FeaturedSection>
		</Layout>
	)
}
