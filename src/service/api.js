const token = 'sk_dc95d97ef48e41858d36653e75cbc720';
const baseURL = 'https://cloud.iexapis.com/stable/stock/wmt/intraday-prices?chartLast=1&token=' + token;
var prices;

export const getTickerData = () => {
	return fetch(baseURL)
		.then((response) => response.json())
		.then((data) => (prices = data));
};

//var prices;
//const data = fetch(url)
//	.then((response) => response.json())
//	.then((data) => (prices = data));
