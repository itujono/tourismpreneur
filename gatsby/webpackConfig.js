const path = require('path')

module.exports = exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				components: path.resolve(__dirname, 'src/components'),
				templates: path.resolve(__dirname, 'src/templates'),
				images: path.resolve(__dirname, 'src/images'),
			},
		},
	})
}
