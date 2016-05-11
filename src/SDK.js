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
		const url = `${settings.apiURL}?iid=${this.iid}`
		return Client.request(url)
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