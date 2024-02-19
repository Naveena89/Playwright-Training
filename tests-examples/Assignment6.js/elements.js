// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZerosToEnd(nums) {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}


const nums = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(nums);
console.log(result); 