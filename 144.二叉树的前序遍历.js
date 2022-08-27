/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-05 16:30:50
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-05 16:38:55
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = []
    const order = node => {
        if (!node) return
        res.push(node.val)
        order(node.left)
        order(node.right)
    }
    order(root)
    return res
};
// @lc code=end