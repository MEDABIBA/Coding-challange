// ======================================================
// Typical tasks
// ======================================================

//  Задача: Найти первый повторяющийся элемент в массиве
// Напиши функцию findFirstDuplicate(arr), которая возвращает первый элемент, появившийся более одного раза, или null, если таких нет.
const numbers = [1, 2, 8, 3, 5, 9, 6, 7, 4];
function findFirstDuplicate(arr) {
  // Write your code here
}
// console.log(findFirstDuplicate(numbers));

// ======================================================

// Написать функцию, которая группирует всех пользователей по их роли в формате: {
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

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов
// Данные на вход
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

// Напишите функцию findLongestWord(str), которая принимает строку str и возвращает самое длинное слово в этой строке.
// Если несколько слов имеют одинаковую максимальную длину, вернуть первое из них.
function findLongestWord(string) {
  // Write your code here
}
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
//result: jumped

// ======================================================

// Реализуй функцию isAnagram(str1, str2), которая проверяет, являются ли две строки анаграммами
// (т.е. содержат одинаковые буквы в любом порядке, без учёта регистра и пробелов).
function isAnagram(str1, str2) {
  // Write your code here
}
// console.log(isAnagram("Astronomer", "Moon starer"));
// isAnagram("listen", "silent")       // true
// isAnagram("Astronomer", "Moon starer") // true
// isAnagram("hello", "world")         // false

// ======================================================

// Реализуй функцию unique, которая принимает массив и возвращает новый массив,
// содержащий только уникальные элементы в порядке их первого появления.
let giveUniqueNumber = [1, 9, 2, 3, 4, 2, 5, 6, 7, 8, 9];
function unique(arr) {
  // Write your code here
}
// console.log(unique(giveUniqueNumber));

// ======================================================

// Напиши функцию groupBy, которая группирует массив объектов по значению указанного ключа.
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

// Реализуй функцию flattenObject(obj), которая превращает вложенный объект в плоский с ключами через точку:
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
// Tasks from interwiews
// ======================================================

function findBiggestNumber(arr) {
  // Write your code here
}
// console.log(findBiggestNumber(sumArr));
// Написати функцію sortStudentsByAge, яка приймає масив students і повертає масив їх імен, відсортований за віком у порядку зменшення.-1
// Заборонено використовувати метод .sort(), рекурсії, цикл у циклі, більше одного явного виклику циклу (for, .foreach(), .map(), .reduce(), .filter(), etc)
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
// Очікуваний результат
// [ 'Alice', 'Charlie', 'Bob' ]

// ======================================================

// Задача: Реализация once
// Реализуй функцию once(fn), которая принимает функцию fn и возвращает новую функцию, которую можно вызвать только один раз
// При повторных вызовах должна возвращаться та же самая первая возвращённая fn - ом величина.
function once(consoleLog) {
  // Write your code here
}
const logOnce = once(console.log);
// logOnce("Hello"); // выводит "Hello"
// logOnce("World"); // ничего не происходит

// ======================================================

let arrNumbers = [1, 7, 4, 2, 9, 5, 3, 6, 8];

// Реализуйте функцию-шпиона spy, которая работает следующим образом:
// принимает на вход любую функцию, например:
function foo(a) {
  return a;
}
const spyFoo = spy(foo);
// и может следить за ее вызовами
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
  Есть массив операций.
  Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве 
  значений представить массивы c датами в формате MM-DD.
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
//   Пример результата:
//   result = {
//     "2017": [
//       "07-31",
//       "08-22"
//     ],
//     "2018": [
//       "01-01"
//       "02-22"
//     ]
// }

// ======================================================

// Функция которая возвращает массив из k самых частых слов, отсортированных:
// 1 по убыванию частоты,
// 2 при равной частоте — в лексикографическом порядке (по алфавиту).
// Нельзя использовать .sort() над исходным массивом.
// Разрешён один явный проход по массиву (for, reduce, и т.п.).
// Можно использовать объекты и методы массива.
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
