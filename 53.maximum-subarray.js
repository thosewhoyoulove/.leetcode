/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-24 16:33:20
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 16:42:11
 */
/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        sum > 0 ? sum += nums[i] : sum = nums[i]
        max = Math.max(sum.max)
    }
    return max
};
// @lc code=end