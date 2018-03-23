const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const appPath = path.join(__dirname, 'public');
const assetPath = path.join(appPath, 'dist');

// console.log(appPath);

module.exports = (env, argv) => {
    
    console.log('env: ', env);
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: assetPath,
            filename: 'bundle.js'
        },
    
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: cssExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                        
                    ]
                })
            }]
        },
        plugins: [
            cssExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: appPath,
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};