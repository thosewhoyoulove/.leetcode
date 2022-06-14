/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-14 20:43:35
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-14 20:49:29
 */
/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    else {
        var x2 = parseInt(x.toString().split('').reverse().join(''))
        return x2 === x1 ? true : false
    }
};
// @lc code=end