function countdown(val) {
  console.log(val);
  // base case
  if (val <= 1) {
    return;
  }
  // recursive case
  countdown(val - 1);
}

countdown(3);

function fact(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(5));
