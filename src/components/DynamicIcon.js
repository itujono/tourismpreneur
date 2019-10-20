import React from 'react'
import { Icon } from 'antd'

export default function DynamicIcon({ size, color, ...props }) {
	const TheIcon = Icon.createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_1467122_fngd47o6g1c.js',
		extraCommonProps: { style: { fontSize: size || 20, color } },
	})

	return <TheIcon {...props} size={size} />
}
