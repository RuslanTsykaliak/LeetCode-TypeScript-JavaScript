/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const nums = bfs(root);
    return quickSelect(nums, k);
};

function bfs(root: TreeNode | null): number[] {
    const result: number[] = []
    const queue = [root];

    while (queue.length) {
        const n = queue.length;
        let levelSum = 0;

        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            levelSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelSum);
    }

    return result;
}

function quickSelect(nums: number[], k: number): number {
    const targetIdx = nums.length - k;
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        const randomIdx = getRandomIdx(leftIdx, rightIdx);
        const partitionIdx = getPartitionIdx(nums, leftIdx, rightIdx, randomIdx);

        if (partitionIdx === targetIdx) {
            return nums[partitionIdx];
        } else if (partitionIdx < targetIdx) {
            leftIdx = partitionIdx + 1;
        } else {
            rightIdx = partitionIdx - 1;
        }
    }

    return -1;
}

function getPartitionIdx(nums: number[], leftIdx: number, rightIdx: number, randomIdx: number): number {
    let partitionIdx = leftIdx;
    const randomVal = nums[randomIdx];
    swap(nums, randomIdx, rightIdx);

    for (let i = leftIdx; i < rightIdx; i++) {
        const currVal = nums[i];
        if (currVal < randomVal) {
            swap(nums, i, partitionIdx);
            partitionIdx++;
        }
    }

    swap(nums, partitionIdx, rightIdx);
    return partitionIdx;
};

function getRandomIdx(leftIdx: number, rightIdx: number): number {
    return Math.floor(Math.random() * (rightIdx - leftIdx + 1)) + leftIdx;
}

function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]]
};