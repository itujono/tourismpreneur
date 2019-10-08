import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'

const Typo = styled(Typography)`
	margin-bottom: ${({ marginBottom }) =>
		marginBottom ? marginBottom : '1.5em'};
`

const Title = styled(Typography.Title)`
	&& {
		margin-bottom: 0;
	}
`

const reverseStyle = {
	fontSize: 11,
	textTransform: 'uppercase',
	lineHeight: 1.4,
	color: '#bbb',
}

function Heading(props) {
	return (
		<Typo {...props}>
			<Title
				style={props.reverse ? reverseStyle : ''}
				level={props.level || 4}
			>
				{props.content}
			</Title>
			<Typography.Paragraph>{props.subheader}</Typography.Paragraph>
		</Typo>
	)
}

export default Heading
