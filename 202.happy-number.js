/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-15 13:26:15
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-16 19:51:25
 */
/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n
    let fast = getNext(n)
    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast === 1
}
var getNext = function(n) {
        return n.toString().split('').map(n => n ** 2).reduce((x, y) => x + y)
    }
    // @lc code=end

// 快慢指针法：创建一个慢指针，一次走一步，再创建一个快指针，一次走两步。
// 若指针移动过程中，找到了 1，则当前数是一个快乐数。
// 当快慢指针相遇，代表形参环路，该数不是快乐数。