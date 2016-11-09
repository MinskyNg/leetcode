/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var convert = function(start, end) {
        if (start > end) {
            return null;
        }

        var mid = (end + start) >> 1;
        var root = new TreeNode(nums[mid]);

        root.left = convert(start, mid - 1);
        root.right = convert(mid + 1, end);

        return root;
    };

    return convert(0, nums.length - 1);
};
