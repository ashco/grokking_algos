// 2.1
// Suppose you’re building an app to keep track of your finances.
// Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So, you have lots of inserts and a few reads. Should you use an array or a list?

// Use list if you have a lot of inserts

// 2.2

// Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it.
// Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)

// Array. Orders go in the front, but need to be retrieved from the back. To avoid having to go through the whole list, choose Array.

// 2.3
// Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list?

// Would have to be an array in order to quickly access middle

// 2.4
// People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array?

// All users after the insert would have to be pushed up aka rewrote

// 2.5
// In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with a. The second slot points to a linked list containing all the usernames starting with b, and so on.

// Suppose Adit B signs up for Facebook, and you want to add them to the list. You go to slot 1 in the array, go to the linked list for slot 1, and add Adit B at the end. Now, suppose you want to search for Zakhir H. You go to slot 26, which points to a linked list of all the Z names. Then you search through that list to find Zakhir H.

// Compare this hybrid data structure to arrays and linked lists. Is it slower or faster than each for searching and inserting? You don’t have to give Big O run times, just whether the new data structure would be faster or slower.

// Compaired to Arrays it will be slower at searching but faster at inserting. List: faster at searching and slower at inserting.

const findSmallest = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = arr => {
  newArr = [];
  // for (let i = 0; i < arr.length - 1; i++) {
  while (arr.length > 0) {
    smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1));
  }
  return newArr.concat();
};

// console.log(selectionSort([8,4,16,15,42,23]));

function findSmallest2(arr) {
  let smallestIndex = 0;
  let smallest = arr[smallestIndex];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort2(arr) {
  const sortedArr = [];

  while (arr.length > 0) {
    let index = findSmallest2(arr);
    sortedArr.push(arr[index]);
    arr.splice(index, 1);
  }

  return sortedArr;
}

console.log(selectionSort2([8, 4, 16, 15, 42, 23, 114, 16, 15, 42, 23]));
