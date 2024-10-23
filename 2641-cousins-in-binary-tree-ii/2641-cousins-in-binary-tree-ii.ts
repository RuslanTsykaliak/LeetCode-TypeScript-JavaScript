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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    // queue of [curr, children values of the parent]
    let queue: [TreeNode, number][] = [[root, root.val]]
    let levelSum = root.val

    while (queue.length) {
        let nextSum = 0
        const qLen = queue.length
        for (let i = 0; i < qLen; i++) {
            const [curr, parChildrenVal] = queue.shift()!

            curr.val = levelSum - parChildrenVal

            const currChildrenVal = (curr.left?.val || 0) + (curr.right?.val || 0)
            if (curr.left) {
                nextSum += curr.left.val
                queue.push([curr.left, currChildrenVal])
            }
            if (curr.right) {
                nextSum += curr.right.val
                queue.push([curr.right, currChildrenVal])
            }
        }
        levelSum = nextSum
    }

    return root
}