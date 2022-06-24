/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-24 17:03:32
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 17:04:43
 */
/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(1, 1)
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end