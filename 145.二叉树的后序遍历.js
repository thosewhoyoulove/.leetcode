/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-05 16:44:32
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-05 16:44:36
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    let res = []
    const order = node => {
        if (!node) return
        order(node.left)
        order(node.right)
        res.push(node.val)
    }
    order(root)
    return res
};
// @lc code=end