if (config.uws) {
module.exports = require('uwebsockets').App({});
} else module.exports = require('https').createServer(app);
