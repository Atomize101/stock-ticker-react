import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';
import { getTickerData } from './service/api';

const App = () => {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		getTickerData().then(setStocks);
		console.log(stocks);
	}, []);

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
						<StockRow stocks="wmt" />
						<StockRow stocks="aapl" />
						<StockRow stocks="msft" />
						<StockRow stocks={stocks} />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;
