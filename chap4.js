// RECURSION AND DIVIDE AND CONQUOR

// EXERCISES
// 4.1
// Write out the code for the earlier sum function.
const arr1 = [2, 4, 5, 7, 9];

function ex41 (arr) {
  if (arr.length <= 1) {
    return arr[0];
  }
  return arr[0] + ex41(arr.slice(1));
}

// console.log(ex41(arr1));

// 4.2
// Write a recursive function to count the number of items in a list.
const arr2 = [2, 4, 5, 7, 9, 234, 2231, 3144];

function ex42 (arr) {
  if (arr.length <= 1) {
    return 1;
  }
  arr.splice(-1);
  return 1 + ex42(arr);
}

// console.log(ex42(arr2));


// 4.3
// Find the maximum number in a list.
// function ex43 (list) {
//   if (list.length === 2) {
//     return list[0] > list[1] ? list[0] : list[1];
//   }
//   const subMax = Math.max(list.slice(1));
//   return list[0] > subMax ? list[0] : subMax;
// }

// console.log(ex43([2, 4, 5, 7, 9, 234, 2231, 144]));


// 4.4
// Remember binary search from chapter 1? It’s a divide-and-conquer algorithm, too. Can you come up with the base case and recursive case for binary search?

function ex44 (arr, item) {
  const min = 0;
  const max = arr.length - 1;



  console.log(min, max);

  // if (item > )
}


// QUICKSORT

function quicksort (array) {
  if (array.length < 2) {
    return array;
  }
  else {
    const pivot = array[0];
    const less = array.filter(num => num < pivot);
    const greater = array.filter(num => num > pivot);

    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}

// console.log(quicksort([4,7,11,2,6]));