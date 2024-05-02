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

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root: TreeNode | null): number {
    // Initialize the diameter to 0
    let diameter = 0

    // Helper function to traverse the tree
    const traverse = (node: TreeNode | null) => {
        // If the node is null, return 0
        if (!node) return 0
        // Recursively traverse the left subtree
        let left = traverse(node.left)
        // Recursively traverse the right subtree
        let right = traverse(node.right)

        // Update the diameter if the sum of the heights of the left and right subtrees is greater than the current diameter
        diameter = Math.max(diameter, left + right)

        // Return the height of the current node, which is the maximum of the heights of the left and right subtrees plus 1
        return 1 + Math.max(left, right)
    }

    // Start the traversal from the root
    traverse(root)

    // Return the diameter
    return diameter
};
