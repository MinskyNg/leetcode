// O(n^3)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [],
        left,
        right;

    nums.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0, len = nums.length; i < len - 3; i++) {
        for (var j = i + 1; j < len - 2; j++) {
            left = j + 1;
            right = len - 1;

            while (left < right) {
                if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;

                } else if (nums[i] + nums[j] + nums[left] + nums[right] < target){
                        while (nums[left] === nums[left + 1]) {
                            left++;
                        }
                        left++;
                    } else {
                        while (nums[right] === nums[right - 1]) {
                            right--;
                        }
                        right--;
                    }
            }

            while (j < len - 3 && nums[j] === nums[j+1]) {
                j++;
            }
        }
        while (i < len - 4 && nums[i] === nums[i+1]) {
            i++;
        }
    }

    return result;
};


// O(n^2*logn)
