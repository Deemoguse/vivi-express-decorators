import { Storage } from './storage';
import type { CommonConfig, SetConfigOption } from '../types/common/common-config';

/**
 * Library сonfiguration.
 * - `storage` - A {@link Storage class} responsible for storing metadata of controllers and HTTP-methods.
 * - `prefixApi` - Prefix for a group of Api methods.
 * - `plugins` - A set of plugins.
 * - `lock` - Freeze the config.
 * - `set` - Set config values and freeze it.
 */
export const config: CommonConfig = {
	storage: new Storage(),
	prefixApi: '/api',
	plugins: [],
	lock () {
		Object.freeze(this);
	},
	set (newConfig) {
		const entries = Object.entries(newConfig);
		entries.forEach(([ k, v ]: any[]) => this[k as keyof SetConfigOption] = v);
		return this.lock();
	},
};