let nums = [1, 2, 3, 4, 5]

let weakSet = new weakSet();

weakSet.add(nums);

nums = null;

console.log(nums);

console.log(nums);
console.log(weakSet);