// ==UserScript==
// @name        Clean CoinMarketCap Tab Title On Coin
// @version     1.01
// @match       http://coinmarketcap.com/*
// @match       https://coinmarketcap.com/*
// @description Shorten CoinMarketCap's tab title
// ==/UserScript==

var title = document.title;
if(document.URL.indexOf("coinmarketcap.com/currencies/") >= 0)
{
    var [remainder1, lastPart] = title.split('|');
    var [remainder2, secondLastPart] = remainder1.split(' to ');
    var [firstPart, midPart] = remainder2.split(' price today, ');
    document.title = firstPart + ' ' + midPart + ' -' + lastPart;
}
