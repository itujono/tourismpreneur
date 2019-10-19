const path = require('path')

module.exports = exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
		{
			allContentfulEvent {
				edges {
					node {
						id
						title
						description {
							description
						}
						featuredImage {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`).then(({ data = {} }) => {
		data.allContentfulEvent.edges.forEach(({ node }) => {
			createPage({
				path: `/events/${node.id}`,
				component: path.resolve(`./src/templates/event.js`),
				context: {
					id: node.id,
				},
			})
		})
	})
}
