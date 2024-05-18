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

function distributeCoins(root: TreeNode | null): number {
    // Initialize the number of moves to 0
    let moves = 0

    function dfs(node: TreeNode | null): number {
        // If the node is null, return 0
        if (!node) return 0

        // Recursively call dfs on the left and right children ofthe node
        const leftExcess = dfs(node.left)
        const rightExcess = dfs(node.right)

        // Add the absolute values of the excess coins in the left and right subtrees to moves
        moves += Math.abs(leftExcess) + Math.abs(rightExcess)

        // Retrun the total number of excess coins at the current node
        return node.val + leftExcess + rightExcess - 1
    }

    // Call dfs on the root of the root of the tree
    dfs(root)

    // Return the total number of moves required to balance the coins
    return moves
};