function foo(x) {
  if (x === null || x === undefined) {
    return 0; //explicitly handle null and undefined
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
console.log(foo(0)); // Output: Error
console.log(foo(false)); // Output: Error