import React from 'react'
import _Calendar from 'antd/lib/calendar'
import styled from 'styled-components'

const StyledCalendar = styled(_Calendar)`
	background-color: white;
`

export default function Calendar(props) {
	return <StyledCalendar {...props} />
}
