import React, { Component } from 'react';

const StockRow = ({ ticker }) => {
	return (
		<tr>
			<td>{ticker}</td>
			<td>{ticker}</td>
			<td>{ticker}</td>
			<td>{ticker}</td>
		</tr>
	);
};

export default StockRow;
