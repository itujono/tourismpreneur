import React from 'react'
import styled from 'styled-components'
import { Card as _Card } from 'antd'

const StyledCard = styled(_Card)`
	&& {
		border-radius: 8px;
		.ant-card-meta-title {
			font-weight: bold;
		}
		.ant-card-cover {
			img {
				border-radius: 8px 8px 0 0;
			}
		}
	}
`

export default function Card({ children, description, title, ...props }) {
	return (
		<StyledCard {...props} cover={<img src={props.cover || ''} />}>
			<StyledCard.Meta
				title={title || ''}
				description={description || ''}
			/>
			{children}
		</StyledCard>
	)
}
