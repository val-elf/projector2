
const url = 'http://localhost:6001';

const PROXY_CONFIG = {
    '/api': {
        target: `${url}/`,
        pathRewrite: {
            '^/api': ''
        },
        secure: true,
        changeOrigin: true,
        logLevel: 'debug',
    }
};

module.exports = PROXY_CONFIG;