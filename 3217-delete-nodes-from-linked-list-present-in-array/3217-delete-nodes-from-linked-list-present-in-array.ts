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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    let currNode = null;
    let startNode = null;
    let numMap = {}
    nums.forEach((num) => {
        numMap[num] = num;
    })

    while (head) {

        if (!(head.val in numMap)) {
            if (startNode) {
                currNode.next = head;
                currNode = currNode.next;
            }
            else {
                startNode = head;
                currNode = startNode;
            }
        }

        head = head.next
    }
    if (currNode) {
        currNode.next = null;
    }
    return startNode;
};