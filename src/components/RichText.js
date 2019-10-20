import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Bold = ({ children }) => (
	<strong style={{ fontFamily: 'Futura Bold' }}>{children}</strong>
)

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>,
		[MARKS.ITALIC]: text => <em>{text}</em>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
	},
}

export default function RichText({ description = {} }) {
	const TheContent = documentToReactComponents(description.json, options)

	return TheContent
}
