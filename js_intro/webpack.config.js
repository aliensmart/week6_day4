const HtmlWebPackPlugin = require("html-webpack-plugin")

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    inject: 'body'
})


module.exports = {
    entry:[
        './src/js/start.js'
    ],
    entry:[
        './src/styles/app.css'
    ],
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
        },
        plugins:[
            HtmlWebPackPluginConfig
        ]
};