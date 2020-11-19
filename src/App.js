import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';
import { getTickerData } from './service/api.js';

const App = () => {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		getTickerData().then(setStocks);
		console.log(stocks[0]);
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
						<StockRow ticker="wmt" price={stocks[0].high} date={stocks[0].date} time={stocks[0].label} />
						<StockRow ticker="aapl" price={stocks[0].high} date={stocks[0].date} time={stocks[0].label} />
						<StockRow ticker="msft" price={stocks[0].high} date={stocks[0].date} time={stocks[0].label} />
						<StockRow ticker="wmt" price={stocks[0].high} date={stocks[0].date} time={stocks[0].label} />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;
