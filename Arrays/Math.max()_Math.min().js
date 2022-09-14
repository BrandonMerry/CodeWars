// Your task is to sum the differences between consecutive pairs in the array in descending order.

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}