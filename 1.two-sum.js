/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-14 20:20:34
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-07-02 11:06:31
 */
/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map()
    for (let i = 0; i < nums.length; i++) {
        var x = target - nums[i]
        if (map.has(x)) {
            return [map.get(x), i]
        }
        map.set(nums[i], i)

    }
};
// @lc code=end


var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        var x = target - nums[i]
        if (map.has(x)) return [map.get(x), i]
        map.set(nums[i], i)
    }
};