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

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    let topRow = 0;
    let leftCol = 0;
    let bottomRow = m - 1;
    let rightCol = n - 1;
    const res = Array.from({ length: m }, () => Array(n).fill(-1));
    const count = m * n;

    while (head) {
        for (let c = leftCol; c <= rightCol && head; c++) {
            res[topRow][c] = head.val;
            head = head.next;
        }
        topRow++;

        for (let r = topRow; r <= bottomRow && head; r++) {
            res[r][rightCol] = head.val;
            head = head.next;
        }
        rightCol--;

        for (let c = rightCol; c >= leftCol && head; c--) {
            res[bottomRow][c] = head.val;
            head = head.next;
        }
        bottomRow--;

        for (let r = bottomRow; r >= topRow && head; r--) {
            res[r][leftCol] = head.val;
            head = head.next;
        }
        leftCol++;
    }

    return res;
};