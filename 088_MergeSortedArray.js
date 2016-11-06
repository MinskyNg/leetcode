/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = m + n - 1;
    m--;
    n--;

    while (index >= 0) {
        if (nums1[m] > nums2[n] || nums2[n] === undefined) {
            nums1[index] = nums1[m];
            index--;
            m--;
        } else if (nums1[m] < nums2[n] || nums1[m] === undefined) {
            nums1[index] = nums2[n];
            index--;
            n--;
        } else {
            nums1[index] = nums1[m];
            index--;
            nums1[index] = nums2[n];
            index--;
            m--;
            n--;
        }
    }
};
