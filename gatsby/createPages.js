const path = require('path')

module.exports = exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
		{
			allContentfulEvent {
				edges {
					node {
						client
						id
						title
						tags
						featuredImage {
							fluid {
								src
							}
						}
						fromDate(formatString: "DD MMM YYYY")
						toDate(formatString: "DD MMM YYYY")
						description {
							json
							description
						}
						updatedAt(formatString: "DD MMM YYYY")
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
