/**
 * Definition for a binary tree node.
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
    return root.val === root.left.val + root.right.val;
};

console.log('10,4,6', checkTree({
    val: 10,
    left: {val: 4, left: null, right: null},
    right: {val: 6, left: null, right: null}
}));
console.log('5,3,1', checkTree({
    val: 5,
    left: {val: 3, left: null, right: null},
    right: {val: 1, left: null, right: null}
}));