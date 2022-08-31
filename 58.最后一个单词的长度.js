/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-27 15:39:39
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-27 15:46:19
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = []
    const str = s.split(' ')
    res = str.filter(item => item.length > 0)
    return res[res.length - 1].length
};
// @lc code=end