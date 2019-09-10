'use strict';
const alfy = require('alfy');
const data = await alfy.fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
const rate = '$' + data.bpi.USD.rate;

alfy.output([
	{
		title: '当前BTC价格',
		subtitle: rate,
		arg: rate
	}
]);
