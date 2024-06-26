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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const nums = [];

    function inorder(root) {
        if (root === null) return;
        inorder(root.left);
        nums.push(root.val);
        inorder(root.right);
    }

    function build(l, r) {
        if (l > r) return null;
        const m = Math.floor((l + r) / 2);
        return new TreeNode(nums[m], build(l, m - 1), build(m + 1, r));
    }
    inorder(root);
    return build(0, nums.length - 1);
};