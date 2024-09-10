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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let current = head;
    while (current.next) {
        const newNode = new ListNode();
        newNode.val = gcdCalc(current.val, current.next.val);
        const newCurrent = current.next;
        newNode.next = current.next;
        current.next = newNode;
        current = newCurrent;

    }
    return head;
};

function gcdCalc(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
} 