function findMin(nums) {
    let left = 0
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }

    return nums[right]
}


let nums = [3, 4, 5, 6, 1, 2]
console.log(findMin(nums))