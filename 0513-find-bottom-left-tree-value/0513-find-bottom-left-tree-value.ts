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

// Initialize variables to keep track of the deepest level and its value
let deep = null
let val = null

// This function finds the leftmost value at the deepest level of a binary tree.
function findBottomLeftValue(root: TreeNode | null): number {
    // If the root is null, return -1 as an error code
    if (!root) return -1

    // Initialize the value and depth with the root's value and 0 respectively
    val = root.val
    deep = 0

    // Start exploring the three from the root
    explore(root, 0)

    // Return the leftmost value at the deepest level
    return val
}

// This function explores a binary tree recursively to find the leftmost value at the deepest level.
function explore(root: TreeNode, row: number): TreeNode | null {
    // If the node is leaf node (both left and right children are null), return the node
    if (!root.left && !root.right) return root

    // Explore the right and left subtrees, incrementing the depth
    const right = root.right && explore(root.right, row + 1)
    const left = root.left && explore(root.left, row + 1)

    // If the current depth is less than the deepest found so far, return null
    if (row < deep) return null

    // Update the deepest level found so far
    deep = row

    // If a left node was found, update the value. Otherwise, update it with the right node's value
    if (left) {
        val = left.val
    } else {
        val = right.val
    }

    // Return null as this function's goal is to update the 'val' variable, not to return a value
    return null
}