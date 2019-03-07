// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    coins={};
   coins.H = Math.floor(currency/50);
   currency = currency - (50*coins.H);
   coins.Q = Math.floor(currency/25);
   currency = currency - (25*coins.Q);
   coins.D = Math.floor(currency/10);
   currency = currency -(10*coins.D);
   coins.N = Math.floor(currency/5);
   currency -= (5*coins.N);
   coins.P = currency;
    for(let key in coins)
        if(coins[key]===0) delete coins[key];


   return coins;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
