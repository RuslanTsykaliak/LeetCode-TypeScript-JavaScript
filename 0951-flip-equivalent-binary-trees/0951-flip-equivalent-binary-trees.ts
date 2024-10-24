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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 && !root2) return true;

    if (!root1 || !root2) return false;

    const flippedLeft = flipEquiv(root1.left, root2.right);
    const equalOrFlippedLeft = flippedLeft ? flippedLeft : flipEquiv(root1.left, root2.left);
    const flippedRight = flipEquiv(root1.right, root2.left);
    const equalOrFlippedRight = flippedRight ? flippedRight : flipEquiv(root1.right, root2.right);

    return root1.val === root2.val && equalOrFlippedLeft && equalOrFlippedRight;
};