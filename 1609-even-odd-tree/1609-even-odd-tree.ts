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

function isEvenOddTree(root: TreeNode | null): boolean {
    // Indicates whether the current level is even or odd.
    let isEvenLevel = true

    // Queue for level order traversal.
    let nodeQueue: (TreeNode | null)[] = [root]

    // Continue until all nodes are processed.
    while (nodeQueue.length > 0) {
        // Holds the the previously encountered value in the current level.
        let previousValue: number = isEvenLevel ? 0 : Number.MAX_SAFE_INTEGER

        // Process all nodes at the current level.
        let levelSize = nodeQueue.length
        for (let i = 0; i < levelSize; i++) {
            // '!' asserts that 'node' won't be null.
            let node = nodeQueue.shift()!

            // Check whether the current node's value is appropriately odd or even.
            // If the current level is even, the node's value should be odd and strictly increasing.
            // If the current level is odd, the node's value should be even and strictly decreasing.
            if (isEvenLevel && (node.val % 2 === 0 || previousValue >= node.val)) return false
            if (!isEvenLevel && (node.val % 2 === 1 || previousValue <= node.val)) return false

            // Update the value
            previousValue = node.val

            // Add child nodes to the queue for the next level.
            if (node.left) nodeQueue.push(node.left)
            if (node.right) nodeQueue.push(node.right)
        }

        // Toggle the level indicator after finishing each level.
        isEvenLevel = !isEvenLevel
    }

    // If all levels meet the conditions, the tree is an even-odd tree.
    return true
};