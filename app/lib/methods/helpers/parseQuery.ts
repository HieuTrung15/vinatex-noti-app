/**
 *
 * @example
 * parseQuery("host=chat.vinatex.com.vn&path=channel/general/thread/meRK2nfjR99MjLn55")
 * // the return will be
 * {
 * 	host: "chat.vinatex.com.vn",
 * 	path: "channel/general/thread/meRK2nfjR99MjLn55"
 * }
 */

export default function (query: string) {
	if (query.startsWith('url=')) {
		return { text: decodeURIComponent(query.replace('url=', '').trim()) };
	}

	return (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params: { [key: string]: string }, param) => {
		const [key, value] = param.split('=');
		params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
		return params;
	}, {});
}
