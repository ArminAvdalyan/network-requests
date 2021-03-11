// 1. Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— 
// return an object with that name and value in it (as key-value pairs).

const { array } = require("prop-types");

function addName(obj, name, value) {
  return Object.assign(obj, { name: value })
}

// console.log(addName({ piano: 500 }, "Brutus", 400));

// Write a function that converts an object into an array, 
// where each element represents a key-value pair in the form of an array.

function toArray(obj) {
  return Object.entries(obj);
}

console.log(toArray({ shrimp: 15, tots: 12 }));

// Create a function that takes two numbers as arguments (num, length) 
// and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(number, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(number * i);
  }
  return arr;
}

// console.log(arrayOfMultiples(7, 5));

// Create a function that takes an array of numbers and returns the second largest number.


function secondLargest(arr, loop) {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  return arr.splice(arr.indexOf(max));
}

// console.log( secondLargest([10, 20, 65, 98]) );

// Create a class named User and create a way to check the number of users (number of instances) were created, 
// so that the value can be accessed as a class attribute.

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(res) {
  res.json()
})
.then(function(resJson) {
  console.log(res.json);
})