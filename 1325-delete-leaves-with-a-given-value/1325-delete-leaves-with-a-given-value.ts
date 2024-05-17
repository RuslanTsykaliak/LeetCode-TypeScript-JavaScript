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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    // If the root is null, return null (base case)
    if (!root) return null

    // Recursively call the function on the left and right subtrees
    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    // If the current node is leaf node (i.e., it has no children) and its value matches the target
    if (!root.left && !root.right && root.val === target) {
        // Set the node to null, effectively removing it
        return null
    }

    // Return the root of the (possibly modified) tree
    return root
};