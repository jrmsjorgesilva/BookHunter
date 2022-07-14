const webpackEnvDevVars = require('webpack');
require('dotenv').config();

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
            'process.env.RELEASE_DATE': JSON.stringify('unknown'),
            'process.env.PORT': JSON.stringify(`${process.env.PORT}`),
            'process.env.SERVER_URL': JSON.stringify(
                `${process.env.SERVER_URL}`
            ),
            'process.env.API_KEY_NEW_YORK_TIMES': JSON.stringify(
                `${process.env.API_KEY_NEW_YORK_TIMES}`
            ),
            'process.env.FIREBASE_API_KEY': JSON.stringify(
                `${process.env.FIREBASE_API_KEY}`
            ),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
                `${process.env.FIREBASE_AUTH_DOMAIN}`
            ),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
                `${process.env.FIREBASE_PROJECT_ID}`
            ),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
                `${process.env.FIREBASE_STORAGE_BUCKET}`
            ),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
                `${process.env.FIREBASE_MESSAGING_SENDER_ID}`
            ),
            'process.env.FIREBASE_APP_ID': JSON.stringify(
                `${process.env.FIREBASE_APP_ID}`
            ),
        }),
    ],
};
