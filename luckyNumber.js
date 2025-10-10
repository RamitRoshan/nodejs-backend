/**
 Find a lucky number
 1. a number is said to be lucky,if x appears x times
 2. if there are multiple lucky number, return the maximum lucky number
 3. if there are no lucky number return -1.

 luckyNum([2,2,3,4])  // 2
 luckyNum([1,2,2,3,3,3,4])  // 3
 luckyNum([2,3,4])  // -1
 */
 

function luckyNum(arr) {
  // Step 1️⃣ — Create an empty object to store how many times each number appears
  const freq = {};

  // Step 2️⃣ — Loop through the array to count each number
  for (let num of arr) {
    // If number already exists, increase its count, otherwise start from 1
    if (freq[num]) {
      freq[num] ++;
    } else {
      freq[num] = 1;
    }
  }

  // Step 3️⃣ — Create a variable to store the lucky number (start with -1)
  let lucky = -1;

  // Step 4️⃣ — Go through each number and its frequency
  for (let num in freq) {
    let number = Number(num);   // keys of objects are strings → convert to number
    let count = freq[num];      // how many times the number appeared

    // Step 5️⃣ — Check if the number appears exactly 'number' times
    if (count === number) {
      // If yes, check if it's the biggest lucky number till now
      lucky = Math.max(lucky, number);
    }
  }

  // Step 6️⃣ — Return the final lucky number or -1 if none found
  return lucky;
}

// 🔹 Test cases to verify the logic
console.log(luckyNum([2, 2, 3, 4]));          // Output: 2 (2 appears 2 times)
console.log(luckyNum([1, 2, 2, 3, 3, 3, 4])); // Output: 3 (3 appears 3 times)
console.log(luckyNum([2, 3, 4]));             // Output: -1 (no lucky number)
