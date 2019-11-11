const path = require('path')
// const { contentfulClient } = require('../src/utils')
const contentful = require('contentful')

const contentfulClient = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = exports.createPages = ({ actions }) => {
	const { createPage } = actions

	return (
		contentfulClient
			.getEntries()
			// .then(response => {
			// 	createPage({
			// 		path: '/',
			// 		component: require.resolve(`./src/templates/guests.js`),
			// 		context: { guests: response.items || [] },
			// 	})
			// })
			.then(response =>
				(response.items || []).forEach(({ fields }) => {
					createPage({
						path: `/guest/${fields.name}/`,
						component: require.resolve('./src/templates/guestDetails.js'),
						context: { guest: fields },
					})
				})
			)
	)

	// return graphql(`
	// 	{
	// 		allContentfulEvent {
	// 			edges {
	// 				node {
	// 					client
	// 					id
	// 					title
	// 					tags
	// 					featuredImage {
	// 						fluid {
	// 							src
	// 						}
	// 					}
	// 					fromDate(formatString: "DD MMM YYYY")
	// 					toDate(formatString: "DD MMM YYYY")
	// 					description {
	// 						json
	// 						description
	// 					}
	// 					updatedAt(formatString: "DD MMM YYYY")
	// 				}
	// 			}
	// 		}
	// 	}
	// `).then(({ data = {} }) => {
	// 	data.allContentfulEvent.edges.forEach(({ node }) => {
	// 		createPage({
	// 			path: `/events/${node.id}`,
	// 			component: path.resolve(`./src/templates/event.js`),
	// 			context: {
	// 				id: node.id,
	// 			},
	// 		})
	// 	})
	// })
}
