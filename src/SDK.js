import Client from './Client'
import settings from './Settings'

class SDK {

	/**
	 * Constructor
	 *
	 * @param {String} iid
	 */
	constructor(iid) {
		this._iid = iid
		this._payload = null
	}

	/**
	 * Initialize the SDK
	 *
	 * @return {Promise}
	 */
	init() {
		return this.authenticate()
	}

	/**
	 * Authenticate with our API
	 *
	 * @return {Promise}
	 */
	authenticate() {
		
		const data = {
			iid: this.iid,
			app_key: 'xX00mbCmPqiOmpUM1xxu75yT4Las0F2M7J2fBMsl',
			app_id: 3,
			name: 'testy2',
			url: 'here'
		}

		return Client.request(settings.apiURL, data, 'POST')
	}

	/**
	 * Get the current iid
	 *
	 * @return {String} iid
	 */
	get iid() {
		return this._iid
	}


}

export default SDK