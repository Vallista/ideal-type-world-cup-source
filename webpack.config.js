const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirJs = path.resolve(__dirname, 'js');
const dirCss = path.resolve(__dirname, 'sass');
const dirHtml = path.resolve(__dirname, 'html');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dirJs, 'main.js'),
    output: {
        path: dirBuild,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: dirBuild,
    },
    module: {
        loaders: [
            {
                test: dirJs,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015'],
                },
                use: [
                    "eslint-loader",
                ],
            },
            {   test: /(\.css$)/,
                loader: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
        rules: [{
            test: dirCss,
            use: [{
                loader: "style-loader", // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    includePaths: ["sass"],
                },
            }],
        },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ]
            }],
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dirHtml, }, // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
    ],
    stats: {
        // Nice colored output
        colors: true,
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
