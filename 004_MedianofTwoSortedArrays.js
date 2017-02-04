/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;

    if (len % 2 === 1) {
        return findKth(nums1, nums2, len / 2 + 1);
    } else {
        return (findKth(nums1, nums2, len / 2) + findKth(nums1, nums2, len / 2 + 1)) / 2;
    }
};


var findKth = function(nums1, nums2, k) {
    k = ~~k;

    if (nums1.length === 0) {
        return nums2[k - 1];
    }

    if (nums2.length === 0) {
        return nums1[k - 1];
    }

    if (k === 1) {
        return nums1[0] < nums2[0] ? nums1[0] : nums2[0];
    }

    var s = ~~(k / 2);
    var n1 = nums1[s - 1];
    var n2 = nums2[s - 1];

    if (n2 === undefined || (n1 !== undefined && n1 < n2)) {
        return findKth(nums1.slice(s), nums2, k - s);
    } else {
        return findKth(nums1, nums2.slice(s), k - s);
    }
};
