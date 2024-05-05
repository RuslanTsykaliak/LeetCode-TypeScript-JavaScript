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
    if (!root) return false;

    const queue: TreeNode[] = [root];
    let level = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        let prevVal = level % 2 === 0 ? -Infinity : Infinity;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            const val = node.val;

            if (level % 2 === 0) {
                if (val % 2 === 0 || val <= prevVal) return false;
            } else {
                if (val % 2 !== 0 || val >= prevVal) return false;
            }

            prevVal = val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return true;
}
