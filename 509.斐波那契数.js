/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-07-04 15:23:01
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-07-04 15:34:29
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = new Array(0, 1)
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end