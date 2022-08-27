/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-05 16:41:40
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-05 16:43:05
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    let res = []
    const order = node => {
        if (!node) return
        order(node.left)
        res.push(node.val)
        order(node.right)
    }
    order(root)
    return res
};
// @lc code=end