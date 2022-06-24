/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-16 21:02:02
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 16:26:43
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    const stack = []
    for (let ch of s) {
        if (map.has(ch)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
                return false
            }
            stack.pop()
        } else {
            stack.push(ch)
        }

    }
    return !stack.length
};
var isValid = function(s) {
    if (s.length % 2 !== 0)
        return false
    let map = new Map([
        [']', '['],
        [')', '('],
        ['}', '{']
    ])
    const stack = []
    for (let ch of s) {
        if (map.has(ch)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
                return false
            }
            stack.pop()
        }
        stack.push(ch)
    }
    return !stack.length
};