/**
 * 412. Fizz Buzz
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 *
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * Example 2:
 *
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 * Example 3:
 *
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 *
 * Constraints:
 *
 * 1 <= n <= 104
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var fizzBuzz = function (num) {
    return Array.from({length: num}, (_, index) => {
        const value = index + 1;
        if (value % 3 === 0 && value % 5 === 0) {
            return 'FizzBuzz'
        } else if (value % 3 === 0) {
            return 'Fizz'
        } else if (value % 5 === 0) {
            return 'Buzz'
        }
        return String(value);
    });
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));