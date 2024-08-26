/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    if (!root) return []
    return [].concat(...root.children.map(postorder), root.val)
};