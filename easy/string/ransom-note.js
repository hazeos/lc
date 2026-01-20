/**
 * 383. Ransom Note
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 * Constraints:
 *
 * 1 <= ransomNote.length, magazine.length <= 105
 * ransomNote and magazine consist of lowercase English letters.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const map = {}

    for (let magChar of magazine) {
        if (magChar in map) {
            map[magChar] = map[magChar] + 1;
        } else {
            map[magChar] = 1;
        }
    }

    for (let noteChar of ransomNote) {
        if (noteChar in map && map[noteChar] > 0) {
            map[noteChar] = map[noteChar] - 1;
        } else {
            return false;
        }
    }

    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh'));