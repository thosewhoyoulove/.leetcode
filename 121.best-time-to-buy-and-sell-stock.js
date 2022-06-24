/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-24 16:54:46
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 17:01:16
 */
/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i]
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min
        }
    }
    return maxProfit
};
// @lc code=end