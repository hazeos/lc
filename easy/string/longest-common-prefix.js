/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    const sortedStrings = strs.sort((a, b) => a.length - b.length);
    const word = sortedStrings[0];

    let result = '';

    for (let i = 0; i < word.length; i++) {
        let currentChar = word[i];

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return result;
            }
        }

        result += currentChar;
    }

    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));