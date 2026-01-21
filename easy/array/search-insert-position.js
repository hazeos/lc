/**
 * 35. Search Insert Position
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums contains distinct values sorted in ascending order.
 * -104 <= target <= 104
 */

/**
 * ChatGPT O (log n) binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // середина
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            // нашли элемент
            return mid;
        } else if (nums[mid] < target) {
            // target больше → сдвигаем левую границу
            left = mid + 1;
        } else {
            // target меньше → сдвигаем правую границу
            right = mid - 1;
        }
    }

    // Если не нашли target, left = индекс вставки
    return left;
}


console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))

var searchInsert2 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
        if (i === nums.length - 1) {
            return i + 1;
        }
    }
}


