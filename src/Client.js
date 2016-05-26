const Promise = require('es6-promise').Promise
const Request = require('browser-request')
const QS = require('query-string')

const Client = {

	/**
	 * @param  {String} url Endpoint
	 * @param  {Object} data Object to send in the body
	 * @param  {String} method Method GET, POST, PUT or DELETE
	 * @return {Promise}
	 */
	request(url, data = {}, method = 'GET') {

		// Create Query String
		const params = QS.stringify(data)

		const requestData = {
			method: method,
			url: url,
			body: data,
			json: true
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(params);

		// return this.fetch(requestData)
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