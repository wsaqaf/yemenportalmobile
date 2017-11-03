const routes = [
	'https://beta.yemenportal.net',
	'https://beta.yemenportal.org',
];

const checkPath = '/not_blocked.txt';

const checkBlocked = (url) => new Promise((resolve, reject) => {
	fetch(`${url}${checkPath}`)
		.then(response => response.text())
		.then(text => resolve(text.trim() === 'indeed' ? true : false))
		.catch(error => resolve(false));
});

export const getUnblockedUrl = () => new Promise((resolve, reject) => {
	Promise.all(routes.map(route => checkBlocked(route)))
		.then(results => {
			const index = results.findIndex(value => value === true);
			resolve({
				found: index >= 0 ? true : false,
				url: index >= 0 ? routes[index] : '',
			});
		})
		.catch(error => reject(error));
});
