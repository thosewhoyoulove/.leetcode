/*
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-08-27 19:26:21
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-31 18:44:16
 */
function validBraces(s) {
    if (s.length % 2 !== 0) return false;
    let map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    const stack = [];
    for (let ch of s) {
        if (map.has(ch)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    console.log(!stack.length);
}
validBraces("()");