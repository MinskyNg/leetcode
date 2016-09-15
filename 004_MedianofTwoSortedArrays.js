/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for (var index1 = 0, index2 = 0, len2 = nums2.length; index2 < len2; index2++) {
        while (nums1[index1] < nums2[index2]) {
            index1++;
        }
        nums1.splice(index1, 0, nums2[index2]);
    }

    var len1 = nums1.length;

    return len1 % 2 === 0 ? (nums1[len1 / 2 - 1] + nums1[len1 / 2]) / 2 : nums1[len1 / 2 - 0.5];
};
