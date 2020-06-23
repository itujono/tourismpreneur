const path = require('path')
// const { contentfulClient } = require('../src/utils')

module.exports = exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	// return (
	// 	contentfulClient
	// 		.getEntries()
	// 		// .then(response => {
	// 		// 	createPage({
	// 		// 		path: '/',
	// 		// 		component: path.resolve(`./src/templates/guests.js`),
	// 		// 		context: { guests: response.items || [] },
	// 		// 	})
	// 		// })
	// 		.then(response =>
	// 			(response.items || []).forEach(({ fields, sys }) => {
	// 				createPage({
	// 					path: `/guest/${sys.id}/`,
	// 					component: path.resolve('./src/templates/guestDetails.js'),
	// 					context: { guest: fields },
	// 				})
	// 			})
	// 		)
	// )

	return graphql(`
		{
			allContentfulGuest {
				edges {
					node {
						id
						name
						phoneNumber
						ticketPurchased
						carModel
					}
				}
			}
		}
	`).then(({ data = {} }) => {
		data.allContentfulGuest.edges.forEach(({ node }) => {
			createPage({
				path: `/guest/${node.id}`,
				component: path.resolve(`./src/templates/guestDetails.js`),
				context: {
					id: node.id,
				},
			})
		})
	})
}
