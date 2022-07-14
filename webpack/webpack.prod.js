require('dotenv').config();
const webpackEnvProdVars = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpackEnvProdVars.DefinePlugin({
            'process.env.ENVIRONMENT': JSON.stringify('Production'),
            'process.env.DEVELOPED_BY': JSON.stringify('JM Softwares'),
            'process.env.SOFTWARE_VERSION': JSON.stringify('0,0,2'),
            'process.env.RELEASE_DATE': JSON.stringify('unknown')
        })
    ]
}

