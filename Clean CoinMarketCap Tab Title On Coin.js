// ==UserScript==
// @name        Clean CoinMarketCap Tab Title On Coin
// @version     1.0
// @match       *://coinmarketcap.com/currencies/*/
// @description Shorten CoinMarketCap's tab title
// ==/UserScript==

var title = document.title;
var [notLast, lastPart] = title.split('|');
var [firstPart, midPart] = notLast.split(' price');
document.title = firstPart + ' :' + lastPart;
