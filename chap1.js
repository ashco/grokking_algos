// BINARY SEARCH

const test1 = [1, 2, 4, 5, 6, 7, 8, 12, 45, 65, 766, 8765];

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
    // Find middle index between low and high
    let mid = Math.floor((low + high) / 2);
    // Find value of middle index
    let guess = arr[mid];

    // Return mid index if found
    if (guess === item) {
      return mid;
    }

    // Cut down range on each pass
    if (guess < item) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
  }
  // Return null if no answer is found
  return null;
}

// console.log(binarySearch(test1, 12));
// console.log(binarySearch(test1, 5));
// console.log(binarySearch(test1, 3));



// EXERCISES
// 1.1
// Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?

// 7 - 64 32 16 8 4 2 1, 7 iterations before cut in half to 1

// 1.2
// Suppose you double the size of the list. What’s the maximum number of steps now?

// 8 - take one extra half cut to remove double

// 1.3
// You have a name, and you want to find the person’s phone number in the phone book.

// Log(n)

// 1.4
// You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)

// n

// 1.5
// You want to read the numbers of every person in the phone book.

// n

// 1.6
// You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)

// log(n)

const binarySearch2 = (arr, item) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const value = arr[mid];
    if (value === item) {
      return mid;
    }
    if (value < item) {
      min = mid + 1;
    }
    else {
      max = mid - 1;
    }
  }
  return null;
}

// console.log(binarySearch2(test1, 5));
// console.log(binarySearch2(test1, 12));
// console.log(binarySearch2(test1, 3));