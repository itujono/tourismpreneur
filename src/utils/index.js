import axios from 'axios'
import { useState } from 'react'
import { css } from 'styled-components'

const instance = axios.create({
	baseURL: 'https://chatbot.tutorsms.com/api/',
	headers: {
		'x-api-key': '917e0958-tutorsms0-4b26-9cudy-9894ed2b540f',
		Accept: 'application/json',
	},
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export { instance }

/////////////////////////////////

export function useFetchData(url, param) {
	const [data, setData] = useState([])

	instance.get(url, param).then(res => {
		setData(res.data)
	})

	return data
}

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
export const tablet =
	typeof window !== 'undefined' &&
	window.innerWidth > 414 &&
	window.innerWidth < 769
