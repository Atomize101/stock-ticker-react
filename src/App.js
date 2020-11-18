import React from 'react';

import './App.css';

const token = 'sk_dc95d97ef48e41858d36653e75cbc720';

const App = () => {
	const url = 'https://cloud.iexapis.com/stable/stock/wmt/intraday-prices?token=' + token;
	const data = fetch(url)
		.then((response) => response.json())
		.then((data) => console.log(data));
	return <div className="App">Hello!</div>;
};

export default App;
