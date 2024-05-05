/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    // If the node is null or the next node is null, we cannot perform the deletion, so we return.
    if (node === null || node.next === null)
        return

    // Reeplace the current node's value with the next node's value.
    node.val = node.next.val

    // Skip over the next node by pointing the current node's pointer to the node after the next node.
    node.next = node.next.next ? node.next.next : null

    return
};