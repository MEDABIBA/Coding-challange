// ======================================================
// Typical tasks
// ======================================================

// Task: Find the first repeating element in an array
// Write a function findFirstDuplicate(arr) that returns the first element that appears more than once, or null if there are none.
const numbers = [1, 2, 8, 3, 5, 9, 6, 7, 4];
function findFirstDuplicate(arr) {
  // Write your code here
}
// console.log(findFirstDuplicate(numbers));

// ======================================================

// Write a function that groups all users by their role in the format: {
//   admin: [...],
//   user: [...],
//   guest: [...]
// }
const users = [
  { id: 1, name: "Alice", age: 25, role: "admin" },
  { id: 2, name: "Bob", age: 30, role: "user" },
  { id: 3, name: "Charlie", age: 22, role: "admin" },
  { id: 4, name: "David", age: 35, role: "user" },
  { id: 5, name: "Eve", age: 28, role: "guest" },
];
function sortByRole(array) {
  // Write your code here
}
// console.log(sortByRole(users));

// ======================================================

// It is necessary to process the array in such a way as to distribute people into city groups
// Input data:
const people = [
  {
    name: "Alex",
    city: "Wien",
  },
  {
    name: "Ivan",
    city: "Wien",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
];
const groupByCity = (array) => {
  // Write your code here
};
// console.log(groupByCity(people))
/*{
  'Wien': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}*/

// ======================================================

// Write a function findLongestWord(str) that takes a string str and returns the longest word in that string.
// If several words have the same maximum length, return the first one.
function findLongestWord(string) {
  // Write your code here
}
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
//result: jumped

// ======================================================

// Implement the function isAnagram(str1, str2) that checks if two strings are anagrams
// (i.e., contain the same letters in any order, regardless of case and spaces).
function isAnagram(str1, str2) {
  // Write your code here
}
// console.log(isAnagram("Astronomer", "Moon starer"));
// isAnagram("listen", "silent")       // true
// isAnagram("Astronomer", "Moon starer") // true
// isAnagram("hello", "world")         // false

// ======================================================

// Implement the unique function that takes an array and returns a new array
// containing only unique elements in the order of their first appearance.
let giveUniqueNumber = [1, 9, 2, 3, 4, 2, 5, 6, 7, 8, 9];
function unique(arr) {
  // Write your code here
}
// console.log(unique(giveUniqueNumber));

// ======================================================

// Write a groupBy function that groups an array of objects by the value of the specified key.
const data = [
  { id: 1, type: "fruit", name: "apple" },
  { id: 2, type: "vegetable", name: "carrot" },
  { id: 3, type: "fruit", name: "banana" },
  { id: 4, type: "vegetable", name: "celery" },
];
function groupBy(data, type) {
  // Write your code here
}
// console.log(groupBy(data, "type"));
// {
//   fruit: [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' }
//   ],
//   vegetable: [
//     { category: 'vegetable', name: 'carrot' }
//   ]
// }
// ======================================================

// Implement the flattenObject(obj) function that converts a nested object into a flat one with keys separated by dots:
const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
function flattenObject(obj, parentKey = "", res = {}) {
  // Write your code here
}
// console.log(flattenObject(input));
/*
{
  "a": 1,
  "b.c": 2,
  "b.d.e": 3
}
*/

// ======================================================

const sumArr = [1, 6, 12];
function calcSumByRecursiveWay(arr) {
  // Write your code here
}
// console.log(calcSumByRecursiveWay(sumArr));

// ======================================================
// Tasks from interviews
// ======================================================

function findBiggestNumber(arr) {
  // Write your code here
}
// console.log(findBiggestNumber(sumArr));
// Write a function sortStudentsByAge that takes an array of students and returns an array of their names, sorted by age in descending order.
// It is forbidden to use the .sort() method, recursion, nested loops, more than one explicit loop call (for, .foreach(), .map(), .reduce(), .filter(), etc)
const students = [
  { name: "Alice", age: 21, courses: ["Math", "Physics"] },
  { name: "Bob", age: 19, courses: ["Computer Science"] },
  { name: "Charlie", age: 20, courses: ["History", "Art"] },
];
function sortStudentsByAge(students) {
  // Write your code here
}
// console.log(sortStudentsByAge(students));
// console.log(sortStudentsByAge(students))
// console.log(
//    sortStudentsByAge(students),
//    'result'
// );
// Expected result
// [ 'Alice', 'Charlie', 'Bob' ]

// ======================================================

// Task: Implementation of once
// Implement the once(fn) function that takes a function fn and returns a new function that can only be called once
// On repeated calls, the same first value returned by fn should be returned.
function once(consoleLog) {
  // Write your code here
}
const logOnce = once(console.log);
// logOnce("Hello"); // outputs "Hello"
// logOnce("World"); // nothing happens

// ======================================================

let arrNumbers = [1, 7, 4, 2, 9, 5, 3, 6, 8];

// Implement a spy function that works as follows:
// takes any function as input, for example:
function foo(a) {
  return a;
}
const spyFoo = spy(foo);
// and can monitor its calls
// spyFoo.calledWith('test123'); // out: false
// spyFoo.returned('test'); // out: true
// spyFoo.callCount(); // out: 1
function spy(func) {
  // Write your code here
}
// console.log(spyFoo("test")); // log: test
// console.log(spyFoo.calledWith("test")); // out: true
// console.log(spyFoo.returned("test")); // out: true
// console.log(spyFoo.callCount()); // out: true

// ======================================================

/**
  There is an array of operations.
  It is necessary to sort the operations by date and group them by year, and as 
  values present arrays with dates in MM-DD format.
*/
const operations = [
  { date: "2017-07-31", amount: "5422" },
  { date: "2017-06-30", amount: "5220" },
  { date: "2017-05-31", amount: "5365" },
  { date: "2017-08-31", amount: "5451" },
  { date: "2017-09-30", amount: "5303" },
  { date: "2018-03-31", amount: "5654" },
  { date: "2017-10-31", amount: "5509" },
  { date: "2017-12-31", amount: "5567" },
  { date: "2018-01-31", amount: "5597" },
  { date: "2017-11-30", amount: "5359" },
  { date: "2018-02-28", amount: "5082" },
  { date: "2018-04-14", amount: "2567" },
];
function sortOperations(operations) {
  // Write your code here
}
// console.log(sortOperations(operations))
//   Example result:
//   result = {
//     "2017": [
//       "07-31",
//       "08-22"
//     ],
//     "2018": [
//       "01-01"
//       "02-22"
//     ]
//   }

// ======================================================

// Function that returns an array of k most frequent words, sorted by:
// 1 by decreasing frequency,
// 2 with equal frequency — in lexicographic order (alphabetically).
// Cannot use .sort() on the original array.
// Only one explicit pass through the array is allowed (for, reduce, etc.).
// Can use objects and array methods.
const words = ["apple", "banana", "apple", "orange", "banana", "apple", "kiwi"];
function topKFrequent(wordsArray, quantity) {
  // Write your code here
}
// console.log(topKFrequent(words, 2));
// topKFrequent(["apple", "banana", "apple", "orange", "banana", "apple"], 2)
// → ["apple", "banana"]

// ======================================================
// Here are some sorting algorithms
// ======================================================

//  bubble sort
function bubbleAlg(arr) {
  // Write your code here
}
// console.log(bubbleAlg(arrNumbers))

// ======================================================

// quick sort
function quickSort(numArr) {
  // Write your code here
}
// console.log(quickSort(arrNumbers))
