// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    return recursiveFunction(nums, left, right, target);
};


var recursiveFunction = (nums, left, right, target) => {
    if(left > right){
        return -1;
    }

    let middle = Math.floor((left + right) / 2)
    
    if(nums[middle] == target){
        return middle
    } else if(nums[middle] > target){
        return recursiveFunction(nums, left, middle - 1, target)
    } else{
        return recursiveFunction(nums, middle + 1, right, target)
    }

}