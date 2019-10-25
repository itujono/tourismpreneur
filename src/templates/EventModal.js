import React from 'react'
import { Modal, Heading } from '../components'
import { Row, Col } from 'antd'

export default function EventModal({ src, item = {}, ...props }) {
	// prettier-ignore
	const { featuredImage: { fluid }, title } = item

	return (
		<Modal {...props}>
			<Row>
				<Col lg={12}>
					<img src={fluid.src} width="100%" alt="" />
				</Col>
				<Col lg={12}>
					<Heading content={title} />
				</Col>
			</Row>
		</Modal>
	)
}
