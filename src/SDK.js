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
			app_id: 3,
			app_key: "xX00mbCmPqiOmpUM1xxu75yT4Las0F2M7J2fBMsl",
			name: "Some new name",
			parameter: "value",
			slots: [
				{
					key: "string",
					keys: [
						{
							key: "key1"
						},
						{
							key: "key2"
						},
						{
							key: "key3"
						}
					]
				},
				{
					key: "string2"
				}
			],
			url: "http://matto.xyz"
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