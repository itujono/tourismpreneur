import React from 'react'
import { Tag as _Tag } from 'antd'
import styled from 'styled-components'

const StyledTag = styled(_Tag)`
	border-radius: 30px;
	padding: 0.6em 1.2em;
	text-transform: uppercase;
`

export default function Tag(props) {
	return <StyledTag {...props} />
}
