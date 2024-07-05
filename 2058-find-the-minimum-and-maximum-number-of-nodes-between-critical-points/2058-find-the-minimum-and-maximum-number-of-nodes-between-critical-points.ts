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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let minDistance = Infinity, prev = head?.val, index = 0;

    let firstCritical = null, lastCritical = null;

    for (let node = head?.next; node?.next; node = node.next, index++) {
        if ((node.val > prev && node.val > node.next.val) || (node.val < prev && node.val < node.next.val)) {
            if (firstCritical !== null) {
                minDistance = Math.min(minDistance, index - lastCritical);
            } else {
                firstCritical = index;
            }
            lastCritical = index;
        }
        prev = node.val;
    }
    return (firstCritical !== null && firstCritical !== lastCritical) ? [minDistance, lastCritical - firstCritical] : [-1, -1];
};