function foo(x) {
  if (x == null) {
    return 0; //intended to handle null and undefined
  } else if (typeof x === 'number') {
    return x + 1;
  } else {
    return 'Error';
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); // Output: 6
console.log(foo('hello')); // Output: Error