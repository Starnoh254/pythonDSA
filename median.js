class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    // findMedianSortedArrays(nums1, nums2) {
    //     // Ensure nums1 is the smaller array
    //     if (nums1.length > nums2.length) {
    //         return this.findMedianSortedArrays(nums2, nums1);
    //     }

    //     const m = nums1.length;
    //     const n = nums2.length;
    //     let low = 0;
    //     let high = m;

    //     while (low <= high) {
    //         // Partition indices
    //         const partitionX = Math.floor((low + high) / 2);
    //         const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    //         // Left and right elements of partitions
    //         const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    //         const minRightX = partitionX === m ? Infinity : nums1[partitionX];

    //         const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    //         const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    //         // Check if the partitions are correct
    //         if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
    //             // If total number of elements is even
    //             if ((m + n) % 2 === 0) {
    //                 return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
    //             }
    //             // If total number of elements is odd
    //             else {
    //                 return Math.max(maxLeftX, maxLeftY);
    //             }
    //         } else if (maxLeftX > minRightY) {
    //             // Move partitionX to the left
    //             high = partitionX - 1;
    //         } else {
    //             // Move partitionX to the right
    //             low = partitionX + 1;
    //         }
    //     }

    //     throw new Error("Input arrays are not sorted");
    // }

    findMedianSortedArrays(nums1, nums2) {
        let len1 = nums1.length, len2 = nums2.length;
        let i = 0, j = 0;
        let median1 = 0, median2 = 0;
        let iterations = Math.floor((len1 + len2) / 2) + 1;

        for (let count = 0; count < iterations; count++) {
            median2 = median1;
            if (i < len1 && j < len2) {
                if (nums1[i] > nums2[j]) {
                    median1 = nums2[j];
                    j++;
                } else {
                    median1 = nums1[i];
                    i++;
                }
            } else if (i < len1) {
                median1 = nums1[i];
                i++;
            } else {
                median1 = nums2[j];
                j++;
            }
        }

        if ((len1 + len2) % 2 === 1) {
            return median1;
        } else {
            return (median1 + median2) / 2.0;
        }
    }
}


const sol = new Solution();
const nums1 = [1, 3];
const nums2 = [2,4];
console.log(sol.findMedianSortedArrays(nums1, nums2)); // Output: 2.0