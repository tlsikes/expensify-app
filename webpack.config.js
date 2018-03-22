// Entry point, output file

const path = require('path');
const appPath = path.join(__dirname, 'public');

console.log(appPath);

module.exports = {
    entry: './src/app.js',
    output: {
        path: appPath,
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: appPath,
        historyApiFallback: true
    }
};

// Loader

