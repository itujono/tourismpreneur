import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Bold = ({ children }) => (
	<strong style={{ fontFamily: 'Futura Bold' }}>{children}</strong>
)

const Image = props => (
	<img
		{...props}
		width="100%"
		alt="Ehehehh"
		style={{ maxWidth: 250, marginRight: '.5em' }}
	/>
)

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>,
		[MARKS.ITALIC]: text => <em>{text}</em>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
		[BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => {
			const url = data.target.fields.file['en-US'] || {}

			return <Image src={url.url} />
		},
	},
}

export default function RichText({ description = {} }) {
	const TheContent = documentToReactComponents(description.json, options)

	return TheContent
}
