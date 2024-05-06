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

// This function removes nodes from a singly linked list that have smaller value than the next node.
function removeNodes(head: ListNode | null): ListNode | null {
    // If the list is empty (i.e., the head is null), return null.
    if (!head) return null

    // Recursively call the function for next node in the list.
    head.next = removeNodes(head.next)

    // If the next node exists and the current node's value is less than the next node's value,
    // remove the current node by returning the next node. Otherwise, return the current node.
    return head = head.next != null && head.val < head.next.val ? head.next : head
};