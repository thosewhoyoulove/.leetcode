/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-07-04 13:49:10
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-07-04 14:09:12
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var merge = function(nums1, m, nums2, n) {
        let i = m - 1,
            j = n - 1,
            k = m + n - 1;
        while (i >= 0 || j >= 0) {
            if (i < 0) nums1[k--] = nums2[j--];
            else if (j < 0) nums1[k--] = nums1[i--];
            else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--]; //先赋值再自减
            else nums1[k--] = nums1[i--];
        }
        return nums1;
    };

};
// @lc code=end