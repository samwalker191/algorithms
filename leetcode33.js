/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    if (nums.length === 0) return -1;

    // find pivot point
    // use pivot point to divide into two arrays
    let left, right, pivotIdx;

    for (let idx = 0; idx < nums.length - 1; idx++) {
        if (nums[idx + 1] < nums[idx]) {
            pivotIdx = idx;
            left = nums.slice(idx + 1)
            right = nums.slice(0, idx + 1);
        }
    }

    // if nums is already sorted, then just bsearch it
    if (!left) return bsearch(nums, target);

    // use bsearch on left or right depending on target value
    if (target === nums[pivotIdx]) {
        return pivotIdx;
    } else if (target < nums[0]) {
        let searched = bsearch(left, target);
        return searched < 0 ? searched : searched + pivotIdx + 1;
    } else {
        return bsearch(right, target);
    }
};

const bsearch = (sorted, target) => {
    if (sorted.length === 0) return -1;
    
    let midIdx = Math.floor(sorted.length / 2);
    let probe = sorted[midIdx];

    if (target === probe) {
        return midIdx;
    } else if (target < probe) {
        let left = sorted.slice(0, midIdx);
        return bsearch(left, target);
    } else {
        let right = sorted.slice(midIdx+1);
        let searched = bsearch(right, target);
        return searched < 0 ? searched : searched + midIdx + 1;
    }
};

console.log(search([1], 1));

// search([4, 5, 6, 7, 0, 1, 2]);