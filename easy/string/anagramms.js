/**
 * 242. Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function isAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const map = {}

    for (let char of first) {
        if (char in map) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    for (let char of second) {
        if (char in map && map[char] > 0) {
            map[char] = map[char] - 1;
        } else {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('jar', 'jam'));