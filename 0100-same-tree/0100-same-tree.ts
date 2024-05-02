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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Base case: both trees are empty (null)
    if (p === null && q === null) {
        return true;
    }
    
    // If one of the trees is empty but the other isn't, they are not the same
    if (p === null || q === null) {
        return false;
    }
    
    // Compare the values of the current nodes
    if (p.val !== q.val) {
        return false;
    }
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
