function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        // check the sorted half
        if (nums[left] <= nums[mid]) {
            // the left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        else {
            // the right half is sorted
            if (nums[right] >= target && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

let arr = [5,1,3]
let target = 5;
console.log(search(arr, target)); 