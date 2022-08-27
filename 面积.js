/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-06 20:25:33
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-06 20:31:53
 */
function getArea(p1, p2, p3, p4) {
    // write code here
    let x = new Arr(4)
    let y = new Arr(4)
    for (let i = 0; i < 4; i++) {
        x[i] = input()
        y[i] = input()
    }
    let mianji = 0
    for (let i = 1; i < 4; i++) {
        mianji += (x[i - 1] * y[i] - x[i] * y[i - 1])
        mianji += x[3] * y[0] - x[0] * y[3]
        mianji = Math.abs(.5 * mianji)
        console.log(mianji);
    }
}