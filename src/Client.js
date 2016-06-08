const Promise = require('es6-promise').Promise

const Client = {

	/**
	 * @param  {String} url Endpoint
	 * @param  {Object} data Object to send in the body
	 * @param  {String} method Method GET, POST, PUT or DELETE
	 * @return {Promise}
	 */
	request(url, data = {}, method = 'POST') {
		const requestData = {
			method: method,
			url: url,
			body: data,
			json: true
		}

		return this.fetch(requestData)
	},

	/**
	 * @param  {Object} requestData Request configuration settings
	 * @return {Promise}
	 */
	fetch(requestData) {
		return new Promise((resolve, reject) => {
			const {method, url, body} = requestData
			const xhr = new XMLHttpRequest()
			const bodyContent = JSON.stringify(body)

			xhr.open(method, url)
			xhr.setRequestHeader('Content-type', 'application/json')
			xhr.send(bodyContent)
			xhr.onload = () => {
				if(xhr.status == 200) {
					resolve(JSON.parse(xhr.response))
				}
				else {
					reject(Error(xhr.statusText))
				}
			}
			
			xhr.onerror = () => reject(Error('Network Error'))
		})
	}
}

export default Client