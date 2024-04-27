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

function middleNode(head: ListNode | null): ListNode | null {
    if(head.next === null) return head
    let curr = head;
    let count = 1;
    while (curr.next !== null) {
        count++;
        curr = curr.next;
    }
    let curr2 = head;
    for (let i = 1; i <= Math.floor(count / 2); i++) {
        if (i === Math.floor(count / 2)) {
            return curr2.next;
        }
        curr2 = curr2.next;
    }
};