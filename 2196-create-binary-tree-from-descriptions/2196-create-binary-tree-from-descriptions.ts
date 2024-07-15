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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    // map to store nodes based on their value
    const nodeMap = new Map<number, TreeNode>();
    // Set to track nodes that are children of other nodes
    const children = new Set<number>();

    // iterate through the descriptions
    for (const [parent, child, isLeft] of descriptions) {
        // Create the parent node if it doesn't exist
        if (!nodeMap.has(parent)) {
            nodeMap.set(parent, new TreeNode(parent));
        }

        // Create the child node if it doesn't exist
        if (!nodeMap.has(child)) {
            nodeMap.set(child, new TreeNode(child));
        }

        // Get the parent and child nodes
        const parentNode = nodeMap.get(parent);
        const childNode = nodeMap.get(child);

        if (parentNode && childNode) {
            if (isLeft === 1) {
                parentNode.left = childNode;
            } else {
                parentNode.right = childNode;
            }
        }
        children.add(child);
    }

    // Get the root node
    for (const [value, node] of nodeMap) {
        if (!children.has(value)) {
            return node;
        }
    }
    return null;
};