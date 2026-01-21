/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 *
 *
 * Follow up: Could you minimize the total number of operations done?
 */

/**
 * Two Pointers - Два указателя (медленный и быстрый)
 * Медленный указывает на позицию куда должны вставать числа и пишет их, быстрый - читает
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length <= 1) {
        return;
    }

    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            const temp = nums[fast];
            nums[fast] = nums[slow];
            nums[slow] = temp;
            slow++;
        }

    }

    console.log(nums);
};

moveZeroes([1, 0])
moveZeroes([1])
moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0])