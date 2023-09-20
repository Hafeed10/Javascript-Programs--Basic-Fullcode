function findLargestInteger(a, b) {
    // Check if a and b are integers
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Please enter valid integers.");
        return null; // Returning null for invalid input
    }

    // Find the larger integer
    return Math.max(a, b);
}

// Example usage
let num1 = 10;
let num2 = 7;

let largestInteger = findLargestInteger(num1, num2);
if (largestInteger !== null) {
    console.error("The largest integer is:", largestInteger);
}
