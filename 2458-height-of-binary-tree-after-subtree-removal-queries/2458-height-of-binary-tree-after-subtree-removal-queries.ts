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

type TMaxDepths = [number, number] // [Left depth, right depth]

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    if (!root) {
        return []
    }
    const maxDepthsByNode: { [node: number]: TMaxDepths } = {}
    const memoMaxDepths = (node: TreeNode, depth = 0) => {
        const { val, left, right } = node
        const leftDepth = left ? memoMaxDepths(left, depth + 1) : depth
        const rightDepth = right ? memoMaxDepths(right, depth + 1) : depth
        const depths = [leftDepth, rightDepth]

        maxDepthsByNode[val] = depths

        return Math.max(...depths)
    }

    const altMaxDepthsByNode: { [node: number]: number } = {}
    // This function records the max depth when node's left or right is cut
    const memoAltDepths = (node: TreeNode, altMaxDepth: number) => {
        const { val, left, right } = node
        const [leftMaxDepth, rightMaxDepth] = maxDepthsByNode[val]
        if (left) {
            // if left is cut off, the max depth of the tree 
            // is the max(altMaxDepth, rightMaxDepth)
            const maxDepth = Math.max(altMaxDepth, rightMaxDepth)
            altMaxDepthsByNode[left.val] = maxDepth
            memoAltDepths(left, maxDepth)
        }
        if (right) {
            // if right is cut off, the max depth of the tree 
            // is the max(altMaxDepth, leftMaxDepth)
            const maxDepth = Math.max(altMaxDepth, leftMaxDepth)
            altMaxDepthsByNode[right.val] = maxDepth
            memoAltDepths(right, maxDepth)
        }
    }
    const runQuery = (query: number) => altMaxDepthsByNode[query]

    memoMaxDepths(root)
    memoAltDepths(root, -1)

    return queries.map(runQuery)
};