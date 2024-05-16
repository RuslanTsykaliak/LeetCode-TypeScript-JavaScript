/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function evaluateTree(root: TreeNode | null): boolean {
    // If the node is a leaf and its value is, return true
    if (root && !root.left && !root.right) {
        return root.val === 1
    }
    // If the node's value is 2, return true if either of its children is true
    if (root && root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    }
    // If the node's value is 3, return true both of its children are true
    if (root && root.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
};