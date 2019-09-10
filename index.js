'use strict';
const alfy = require('alfy');
const data = await alfy.fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

alfy.output([
	{
		title: '当前BTC价格',
		subtitle: '$' + data.bpi.USD.rate,
		// arg: data.bpi.USD.rate
	}
]);
