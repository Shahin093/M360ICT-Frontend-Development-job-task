function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] === undefined) {
      // Calculate and cache the result for the given arguments
      cache[key] = func(...args);
    }

    return cache[key];
  };
}

// Example: Expensive function to calculate the factorial of a number
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Apply memoization to the factorial function
const memoizedFactorial = memoize(calculateFactorial);

// Test the memoized function
console.log(memoizedFactorial(5)); // calculates and caches the result for 5
console.log(memoizedFactorial(5)); // returns the cached result for 5
console.log(memoizedFactorial(7)); // calculates and caches the result for 7
console.log(memoizedFactorial(7)); // returns the cached result for 7
