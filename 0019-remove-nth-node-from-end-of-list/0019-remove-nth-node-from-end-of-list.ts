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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0)
    dummy.next = head
    let first = dummy
    let second = dummy
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        first = first.next!
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next!
        second = second.next!
    }
    second.next = second.next!.next
    return dummy.next
};