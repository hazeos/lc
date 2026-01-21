/**
 * 821. Shortest Distance to a Character
 * Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is
 * the distance from index i to the closest occurrence of character c in s.
 * The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
 *
 * Example 1:
 * Input: s = "loveleetcode", c = "e"
 * Output: [3,2,1,0,1,0,0,1,2,2,1,0]
 * Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
 * The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
 * The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
 * For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
 * The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
 *
 * Example 2:
 * Input: s = "aaab", c = "b"
 * Output: [3,2,1,0]
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s[i] and c are lowercase English letters.
 * It is guaranteed that c occurs at least once in s.
 */

/**
 * Two Pointers - Два указателя (медленный и быстрый) и Two Pass - Два прохода (слева направа и справа налево)
 * Медленный идет по ждет когда найдут `c` и догоняет через while, заполняя дистанцией до `c`
 * После делаем тоже самое справа, но уже записывая меньшее расстояние
 * Выбирая минимальное из `result[i]` и результатом `Math.abs(slow2 - fast2)`
 *
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let slow = 0;
    const result = [];

    for (let fast = 0; fast < s.length; fast++) {
        result.push(fast);
        if (s[fast] === c) {
            while (slow <= fast) {
                result[slow] = Math.abs(slow - fast);
                slow++;
            }
        }
    }

    let slow2 = result.length - 1;
    for (let fast2 = s.length - 1; fast2 >= 0; fast2--) {
        if (s[fast2] === c) {
            while (slow2 >= fast2) {
                result[slow2] = Math.min(result[slow2], Math.abs(slow2 - fast2));
                slow2--;
            }
        }
    }

    return result;
};

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaab', 'b'));