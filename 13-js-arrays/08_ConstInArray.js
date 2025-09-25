const nums = [1,2,3]
nums[0] = 10

console.log(nums); // 10,2,3 -> it can be changed as long as we are not declaring the same variable

// like

nums = [1,2,3] // create a new reference which is prohibted in javascript
console.log(nums);

