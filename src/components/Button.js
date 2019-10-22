import React from 'react'
import { Button as _Button } from 'antd'
import styled from 'styled-components'
import { baseStyles } from '../styles'

const StyledButton = styled(_Button).attrs(({ size, shape }) => ({
	size: size || 'large',
	shape: shape || 'round',
}))`
	&& {
		height: 50px;
		width: ${({ shape }) => (shape === 'circle' ? '50px' : 'auto')};
		font-weight: bold;
		font-size: ${({ size }) => size === 'large' && '16px'};
		color: white;
		border-color: ${baseStyles.primaryColor};
		background-color: ${baseStyles.primaryColor};
		&:hover {
			background-color: ${baseStyles.tertiaryColor};
			border-color: ${baseStyles.tertiaryColor};
			color: ${baseStyles.primaryColor};
		}
	}
`

export default function Button(props) {
	return <StyledButton {...props} />
}
