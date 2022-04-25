var path = require('path')
var webpack = require('webpack')

const publicPath = '/dist/'

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath,
		filename: 'build.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader'
			],
		}, {
			test: /\.(scss|sass)$/,
			use: [{
				loader: 'vue-style-loader'
			},
			{
				loader: 'css-loader'
			},
			{
				loader: 'sass-loader'
			}
			]
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {}
				// other vue-loader options go here
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		// {
		// 	test: /\.(png|jpg|gif|svg)$/,
		// 	loader: 'file-loader',
		// 	options: {
		// 		name: '[name].[ext]?[hash]'
		// 	}
		// },
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.(png|jpg|gif|svg|webp)$/,
			loader: 'url-loader'
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'url-loader'
		},
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, './src/'),
			'@components': path.resolve(__dirname, './src/components/')
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		before(app, server) {
			// app.get('/', (req, res) =>{
			// 	res.redirect('/');
			// });
			app.get('/api/getData', (req, res) => {
				res.json({
					data: new Array(10).fill('').map(i => {
						return {
							name: new Array(10).fill('').map(() => String.fromCharCode(97 + (26 * Math.random() | 0))).join(''),
							price: 1 + (200 * Math.random() | 0),
						}
					})
				})
			});
		},
		historyApiFallback: {
			index: '/',
		},
		noInfo: true,
		overlay: true,
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
