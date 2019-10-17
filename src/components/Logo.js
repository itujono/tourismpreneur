import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

function Logo({ width, type = 'solid' }) {
	const src = type === 'solid' ? logo : logo

	return (
		<Link to="/">
			<img src={src} width={width || '120'} alt="Logo Tacita" />
		</Link>
	)
}

export default Logo
