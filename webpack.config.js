// This is a node script
// Give it entry point
// Tell where to output bundle.js file
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}

/*module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
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
                'css-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};*/

// entry defines entry point (file that is being observed)

// loader lets you customize the behavior of webpack when a file is loaded
// this is what we need for jsx to transform to es6
// we need to install babel modules (babel core and babel loader)
// .babelrc used to set presets (loader and webpack understand this file)

// dev-tool is used for setting up a source map. Source maps makes development much much faster (instead of errors
// being pointed out in bundle.js, the source map knows how to identify where in the code the error occurs as written)
// bundle getting served up is not the actual physical bundle.js file with the webpack devServer. It is serving bundle.js
// from memory (we can delete bundle.js when using webpack devServer - the substitute live-server

// babel-plugin-transform-class-properties - we use this once we set up plugins in .babelrc
// in order to simplify classes (using arrow functions, not having to manually bind functions to class)

//historyApiFallback serves up index.html to have routers determine what should be on the screen (this will help for all 404s)
// this tells dev-server that we will handle routing via client-side code