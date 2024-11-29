// var maxProfit = function(prices, fee) {
//     let hold = -prices[0]; // Initial state: bought on day 0
//     let notHold = 0; // Initial state: no stock on day 0

//     for (let i = 1; i < prices.length; i++) {
//         // Update states based on today's price
//         hold = Math.max(hold, notHold - prices[i]); // Max profit if holding stock
//         notHold = Math.max(notHold, hold + prices[i] - fee); // Max profit if not holding stock
//     }

//     return notHold; // Maximum profit will be when not holding stock at the end
// };
var maxProfit = function(prices, fee) {
    let buy = -Infinity,
        sell = 0;
    for (let price of prices) {
        let tmp = buy;
        buy = Math.max(buy, sell - price);
        sell = Math.max(sell, tmp + price - fee);
    }
    return sell;
};
// Example usage
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // Output: 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // Output: 6