import SDK from './SDK'
const qs = require('query-string')

const params = qs.parse(location.search)
if(!params.iid) {
	throw new Error('esca SDK has not been properly configured through the esca Dashboard.')
}

const esca = new SDK(params.iid)

module.exports = global.esca = esca