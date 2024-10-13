function hasTargetSum(array, target) {
  // Create a set to store numbers we have seen
  const seenNumbers = new Set();
  
  // Loop through each number in the array
  for (let number of array) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - number;
    
    // Check if we've already seen the complement
    if (seenNumbers.has(complement)) {
      return true; // If so, return true since we found a pair
    }
    
    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair was found, return false
  return false;
}

/* 
  Time Complexity: O(n), where n is the length of the array.
  We are looping through the array once, and checking/adding to the set takes constant time on average.

  Space Complexity: O(n), because we are storing at most n numbers in the set.
*/

/* 
  Pseudocode:
  1. Create a set to store numbers we have seen.
  2. Loop through each number in the array.
  3. For each number, calculate the complement (target - current number).
  4. Check if the complement is in the set:
     - If it is, return true because we found a pair.
     - If it's not, add the current number to the set.
  5. If we finish looping through the array without finding a pair, return false.
*/

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // 3 + 7 = 10

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // 19 + 6 = 25

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // No pair adds up to 4

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // -7 + 10 = 3

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5)); // 1 + 4 = 5

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4)); // 2 + 2 = 4

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4)); // Only one number, no pairs
}

module.exports = hasTargetSum;
