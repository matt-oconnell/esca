const Promise = require('es6-promise').Promise
const Request = require('browser-request')

const Client = {

	/**
	 * @param  {String} url Endpoint
	 * @param  {String} method Method GET, POST, PUT or DELETE
	 * @param  {Object} body Objet to send in the body
	 * @return {Promise}
	 */
  request(url, method = 'GET', body = '{}') {
		const requestData = {
			method: method,
			url: url,
			body: body,
			json: true
		}

		return this.fetch(requestData)
	},

	/**
	 * @param  {Object} requestData Request configuration settings
	 * @return {Promise}
	 */
	fetch(requestData) {
		return new Promise(function(resolve, reject) {
			Request(requestData, (er, response) => {
				if(er) {
					reject(`Failed: HTTP status was ${response.status}`)
				} else {
					resolve(response.body)
				}
			})
		})
	}

}

export default Client