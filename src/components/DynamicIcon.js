import React from 'react'
import { Icon } from 'antd'

export default function DynamicIcon({ size, color, ...props }) {
	const TheIcon = Icon.createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_1290431_6psj6jddxba.js',
		extraCommonProps: { style: { fontSize: size || 20, color } },
	})

	return <TheIcon {...props} size={size} />
}
