/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-24 17:09:15
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 19:52:18
 */
/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (!set.delete(nums[i])) {
            set.add(nums[i])
        }
    }
    return Array.from(set)[0]
};
// @lc code=end