import React, { Component } from 'react';

const StockRow = ({ ticker, price, date, time }) => {
	return (
		<tr>
			<td>{ticker}</td>
			<td>{price}</td>
			<td>{date}</td>
			<td>{time}</td>
		</tr>
	);
};

export default StockRow;
