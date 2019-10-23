const path = require('path')
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Gatsby Ant-Design Documentation Starter',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-json`,
			options: {
				typeName: `MenuItems`, // a fixed string
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `menuItems`,
				path: `${__dirname}/src/menuItems`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-root-import`,
			options: {
				src: path.join(__dirname, 'src'),
				pages: path.join(__dirname, 'src/pages'),
				components: path.join(__dirname, 'src/components'),
				images: path.join(__dirname, 'src/images'),
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-markdown',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-remove-trailing-slashes`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
	/// this must match the path your webpage is displayed from
	// pathPrefix:
	// 	process.env.NODE_ENV === 'development' ? '' : '/gatsby-antd-docs',
}
