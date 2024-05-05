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

function findBottomLeftValue(root: TreeNode | null): number {
    let queue: Array<TreeNode> = []
    let node = root

    if(root !== null) {
        queue.push(root)
    }

    while(queue.length !== 0) {
        node = queue.shift()!
        if(node.right !== null) {
            queue.push(node.right)
        }
        if(node.left !== null) {
            queue.push(node.left)
        }
    }

    return node!.val
};