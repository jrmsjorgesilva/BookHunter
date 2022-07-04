const webpackEnvDevVars = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new webpackEnvDevVars.DefinePlugin({
            'process.env.ENVIRONMENT': JSON.stringify('Development'),
            'process.env.DEVELOPED_BY': JSON.stringify('JM Softwares'),
            'process.env.SOFTWARE_VERSION': JSON.stringify('0,0,2'),
            'process.env.RELEASE_DATE': JSON.stringify('unknown')
        })
    ]
}

