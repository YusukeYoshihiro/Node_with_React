// key.js -- figure out what set of credentials to return
if (process.env.NODE_DEV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
