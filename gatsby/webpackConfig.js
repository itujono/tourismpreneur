const path = require('path')

module.exports = exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			resolve: {
				alias: {
					components: path.resolve(__dirname, 'src/components'),
					templates: path.resolve(__dirname, 'src/templates'),
					images: path.resolve(__dirname, 'src/images'),
				},
			},
			module: {
				rules: [
					{
						test: /contentful/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}
