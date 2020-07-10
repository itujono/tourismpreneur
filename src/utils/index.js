import React, { useEffect } from 'react'
import { css } from 'styled-components'
import moment from 'moment'
import 'moment/locale/id'

// const contentful = require('contentful')

moment.locale('id')

// export const contentfulClient = contentful.createClient({
// 	space: process.env.CONTENTFUL_SPACE_ID,
// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// })

/////////////////////////////////

export const pricer = price =>
	new Intl.NumberFormat('en-ID', {
		currency: 'IDR',
	}).format(price)

export const upperCase = word => word && word[0].toUpperCase() + word.slice(1)

// prettier-ignore
export const sheetFormat = ["xlsx", "xlsb", "xlsm", "xls"]
    .map(function(x) { return "." + x }).join(",")

// Google Maps
export const apiKey = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`

// Media queries Styled-Components
const sizes = {
	tablet: 767,
	mobile: 414,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)};
		}
	`
	return acc
}, {})

export const mobile = typeof window !== 'undefined' && window.innerWidth < 415
export const tablet = typeof window !== 'undefined' && window.innerWidth > 414 && window.innerWidth < 769

const createKeyChecker = (hotkeys = []) => {
	let index = 0
	const TAIL = hotkeys.length - 1

	return key => {
		if (key !== hotkeys[index]) {
			index = 0
			return false
		}

		if (index === TAIL) {
			index = 0
			return true
		}

		index++
		return false
	}
}

export function useHotKey(hotKeys, onMatch) {
	const keyCrawler = React.useMemo(() => createKeyChecker([].concat(hotKeys)), [hotKeys])

	const listen = ({ key }) => {
		if (keyCrawler(key)) {
			onMatch()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', listen)
		return () => window.removeEventListener('keydown', listen)
	})
}
