import React from 'react'
import { Icon } from 'antd'

export default function DynamicIcon({ size, color, ...props }) {
	const TheIcon = Icon.createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_1467122_hmfqtj3ev2e.js',
		extraCommonProps: {
			style: { fontSize: size || 20, color, verticalAlign: 'top' },
		},
	})

	return <TheIcon {...props} size={size} />
}
