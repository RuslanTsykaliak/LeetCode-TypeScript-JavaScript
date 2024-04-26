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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head || !head.next) return head;

    const dummy1 = new ListNode(0, null);
    const dummy2 = new ListNode(0, null);

    let prev1 = dummy1;
    let prev2 = dummy2;

    let current = head;

    while (current !== null) {
        if (current.val < x) {
            prev1.next = current;
            prev1 = current;
        } else {
            prev2.next = current;
            prev2 = current;
        }
        current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    return dummy1.next;
};