/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-06 10:28:46
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-06 21:09:44
 */
function findEwordCount(string) {
    let s = string.split(' ')
    console.log(s);
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (s.includes['e'] || s.includes['E']) {
            sum++
        }
    }
    return sum
}
findEwordCount('sguigui suihis')