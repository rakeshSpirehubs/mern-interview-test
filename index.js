const fs = require("fs");

const filePath = process.argv[2];

// GET MAX SUM OF ARRAY
const maxSumOfArray = (array) => {
  let maxSumValue = array[0];
  let currentSumValue = array[0];

  for (let i = 1; i < array.length; i++) {
    currentSumValue = Math.max(array[i], currentSumValue + array[i]);
    maxSumValue = Math.max(maxSumValue, currentSumValue);
  }

  return maxSumValue;
};

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }

  try {
    const numbers = JSON.parse(data);
    if (!Array.isArray(numbers)) {
      throw new Error("Invalid JSON format.");
    }

    const maxSumValue = maxSumOfArray(numbers);
    console.log("Maximum sum of contiguous subarray:", maxSumValue);
  } catch (error) {
    console.error("JSON parse error:", error);
  }
});
