function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // yerlərini dəyiş
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Test
const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers));
// Output: [2, 3, 4, 5, 8]
