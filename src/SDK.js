import Client from './Client'
import settings from './Settings'
const qs = require('query-string')

class SDK {

	/**
	 * Constructor
	 */
	constructor() {}

	/**
	 * Get the app payload!
	 *
	 * @param  {String} appKey  Client can get this from the dashboard
	 * @return {Promise}
	 */
	payload(appKey) {
		if(!appKey) {
			throw new Error('esca SDK requires an app key')
		}
		this.authenticate(appKey)
	}

	/**
	 * Registers a new experience with the API
	 * This should only happen once.
	 *
	 * @param  {String} appKey  Client can get this from the dashboard
	 * @param  {String} name    Name of experience
	 * @param  {String} url     This is the url where the SDK script will be included
	 * @param  {Array}  slots
	 *    Slots format (the strings are customizable):
	 *    [
	 *      {
	 *        key: 'Name of Slot Key (Paintings)',
	 *        keys: [
	 *          { key: 'value (Painting1)' },
	 *          { key: 'value2 (Painting2)' }
	 *        ]
	 *      }
	 *    ]
	 *
	 * @return {Promise}
	 */
	 createExperience({appKey = null, name = null, url = null, slots = []}) {

		const data = {
			app_key: appKey,
			name: name,
			slots: slots,
			url: url,
			app_id: 13
		}
		
		return Client.request(settings.experienceURL, data)
	}

	/**
	 * Authenticate with our API
	 * @return {Promise}
	 */
	authenticate(appKey) {
		this.rollingKey = SDK.getRollingKey();

	}

	/**
	 * Get the Rolling Key
	 * @return {String} rollingKey
	 */
	static getRollingKey() {
		const params = qs.parse(location.search)
		const rk = params.rk
		if(!rk) {
			throw new Error('esca SDK has not been properly configured through the esca Dashboard.')
		}
		return rk
	}

}

export default SDK