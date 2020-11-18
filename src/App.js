import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';

const token = 'sk_dc95d97ef48e41858d36653e75cbc720';

const App = () => {
	const url = 'https://cloud.iexapis.com/stable/stock/wmt/intraday-prices?chartLast=1&token=' + token;
	var prices;
	//const data = fetch(url)
	//	.then((response) => response.json())
	//	.then((data) => (prices = data));
	return (
		<div className="App">
			<div className="container">
				<table className="table mt-5">
					<thead>
						<tr>
							<th>Ticker</th>
							<th>Price</th>
							<th>Date</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						<StockRow ticker="wmt" />
						<StockRow ticker="aapl" />
						<StockRow ticker="msft" />
						<StockRow ticker="tsla" />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;
