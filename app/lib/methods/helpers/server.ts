/*
	Extract hostname from url
	url = 'https://chat.vinatex.com.vn/method'
	hostname = 'chat.vinatex.com.vn'
*/
export const extractHostname = (url: string): string => {
	let hostname;

	if (url.indexOf('//') > -1) {
		[, , hostname] = url.split('/');
	} else {
		[hostname] = url.split('/');
	}
	[hostname] = hostname.split(':');
	[hostname] = hostname.split('?');

	return hostname;
};
