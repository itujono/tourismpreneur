import React from 'react'
import { Modal, Heading } from '../components'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { media } from '../utils'

const StyledModal = styled(Modal)`
	.ant-modal-body {
		img {
			height: 100%;
			max-height: 350px;
			object-fit: contain;
		}
		.right {
			.ant-typography {
				line-height: 1.1;
			}
		}
	}

	${media.mobile`
        width: 100% !important;
    `}
`

export default function EventModal({ item = {}, ...props }) {
	// prettier-ignore
	const { featuredImage = {}, title } = item
	const src = (featuredImage.fluid || {}).src

	return (
		<StyledModal {...props} width="80%" footer={false}>
			<Row>
				<Col lg={12}>
					<img src={src} width="100%" alt={title} />
				</Col>
				<Col lg={12} className="right">
					<Heading level={2} content={title} />
				</Col>
			</Row>
		</StyledModal>
	)
}
