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

function doubleIt(head: ListNode | null): ListNode | null {
    // Create a new node with value 0 and next pointer pointing to the head of the list.
    // This new node becomes the new head of the list.
    const result = new ListNode(0, head); head = result

    // Traverse the list until the end is reached.
    while (head.next) {
        // If the value of the next node is greater than or equal to 5, increment the value of the current node.
        if (head.next.val >= 5) head.val++

        // Double the value of the next node and take it modulo 10.
        head.next.val = (head.next.val * 2) % 10

        // Move to the next node.
        head = head.next
    }

    // If the value of the result node (the new head) is non-zero, return the result node.
    // Otherwise, return the next node (which is the original head of the list).
    return result.val ? result : result.next
};