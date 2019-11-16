import React from 'react'
import styled from 'styled-components'
import { media } from '../utils'

const StyledSection = styled.section`
	padding: ${({ ph, pv, noPadding }) =>
		(ph === 0 && `${pv} 0`) ||
		(ph === 'padded' && `${pv} 3.5em`) ||
		(ph === 'very' && `${pv} 5.5em`) ||
		(noPadding && 0) ||
		`${pv} ${ph}`};
	width: ${({ width }) => width || '100%'};
	background: ${({ bg }) => bg};
	text-align: ${({ textAlign, centered }) => (centered ? 'center' : textAlign)};
	margin: ${({ centered }) => centered && '0 auto'};
	${media.mobile`
		&& {
			padding: 1em;
		}
	`}
`

export default function Section({ textAlign = 'left', children, ...props }) {
	return (
		<StyledSection textAlign={textAlign} pv={props.pv || '2em'} ph={props.ph || '3em'} {...props}>
			{children}
		</StyledSection>
	)
}
