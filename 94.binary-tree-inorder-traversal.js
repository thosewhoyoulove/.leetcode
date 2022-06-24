/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-24 20:03:12
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-24 20:08:57
 */
/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
    const res = []
    const order = node => {
        if (node.left !== null) {
            order(node.left)
        }
        res.push(node.val)
        if (node.right !== null) {
            order(node.right)
        }
    }
    order(root)
    return res
};
// @lc code=end