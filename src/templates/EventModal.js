import React from 'react'
import { Modal, Heading } from '../components'
import { Row, Col, Badge, Icon } from 'antd'
import styled from 'styled-components'
import { media } from '../utils'
import Tag from '../components/Tag'
import DynamicIcon from '../components/DynamicIcon'
import moment from 'moment'
import { Link } from 'gatsby'

const StyledModal = styled(Modal)`
	.ant-modal-body {
		padding: 3em;
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
	const { featuredImage = {}, title, tags, client, fromDate, toDate } = item
	const src = (featuredImage.fluid || {}).src
	const timeFromDate = moment(fromDate, 'DD-MMM-YYYY').toDate()
	const timeToDate = moment(toDate, 'DD-MMM-YYYY').toDate()
	const isPast = moment().isAfter(moment(timeToDate))
	const timeText = isPast
		? `Event ini sudah selesai ${moment(timeToDate).fromNow()}`
		: `Event ini akan digelar ${moment().to(moment(timeFromDate))}`

	return (
		// prettier-ignore
		<StyledModal {...props} width="60%" footer={false}>
			<Row gutter={32}>
				<Col lg={10}>
					<img src={src} width="100%" alt={title} />
				</Col>
				<Col lg={14} className="right">
					<div css={` margin-bottom: 2em; `}>
						<Badge status={isPast ? 'default' : 'success'} text={timeText} />
					</div>
					<Heading level={2} content={title} />
					<Row css={` margin-bottom: 1em; `}>
						<Col lg={12}>
							<p className="date">
								<DynamicIcon type="iconicon_date" /> &nbsp; {fromDate} - {toDate}
							</p>
						</Col>
					</Row>
					<Row type="flex" justify="space-between" align="middle" css={`margin-bottom: 4em`}>
						<Col lg={12}>
							<div>
								{(tags || []).map(item => (
									<Tag color="#f50">{item}</Tag>
								))}
							</div>
						</Col>
						<Col lg={12} style={{ textAlign: 'right' }}>
							<div>Klien: {client}</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Link to={`/events/${item.id}`}>Lihat detail <Icon type="right" /></Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</StyledModal>
	)
}
