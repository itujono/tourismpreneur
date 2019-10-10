import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
	padding: ${({ ph, pv }) =>
		(ph === 0 && `${pv} 0`) ||
		(ph === 'padded' && `${pv} 2em`) ||
		(ph === 'very' && `${pv} 4em`) ||
		`${pv} ${ph}`};
`

export default function Section({ textAlign = 'left', children, ...props }) {
	return (
		<StyledSection
			textAlign={textAlign}
			pv={props.pv || '2em'}
			ph={props.ph || '3em'}
			{...props}
		>
			{children}
		</StyledSection>
	)
}
