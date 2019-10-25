import React from 'react'
import _Modal from 'antd/lib/modal'
import styled from 'styled-components'

const StyledModal = styled(_Modal)`
	.ant-modal-content {
		border-radius: 10px;
	}
`

export default function Modal(props) {
	return <StyledModal centered {...props} />
}
