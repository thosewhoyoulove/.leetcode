/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-07-04 14:38:01
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-05 16:08:26
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// var maxDepth = function(root) {
//     if (!root) return 0
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };
// @lc code=end

var maxDepth = function(root) {
    let max = 0
    let start = 0
    let dfs = function(node, deep) {
        if (node === null) return
        deep++

        if (node.left == null && node.right == null) {
            if (depp > max)
                max = deep

        }
        dfs(node.left, deep)
        dfs(node.right, depp)
    }
    dfs(root, start)
    return max
};