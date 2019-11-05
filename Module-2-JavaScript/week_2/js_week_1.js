// Task 1
console.log('Hello World!'); // English
console.log('Привіт Світ!'); // Ukraine
console.log('Привет Мир!'); // Russian

// Task 2
console.log('I\'m awesome');

// Task 3
let x;
console.log('the value of my variable x will be: ' + x);
console.log(x);

x = 10;
console.log('the value of my variable x will be: ' + x);
console.log(x);

// Task 4
let y = 'text';
console.log('the value of my string will be: ' + y);
console.log(y);

y = 'new text';
console.log('the value of my string will be: ' + y);
console.log(y);

// Task 5
let z = 7.25;
console.log(z);

let a = Math.floor(z);
console.log(a);

let max = Math.max(z, a);
console.log(max);

// Task 6
let myNewArray = [];
console.log('the value of my array will be empty array');
console.log(myNewArray);

let myFavoritAnimals = ['Lion', 'Monkey', 'Snake'];
console.log(myFavoritAnimals);

myFavoritAnimals.push('baby pig');
console.log(myFavoritAnimals);

// Task 7
let myString = 'this is a test';
console.log(myString);
console.log(myString.length);

// Task 8
let myNum = 3;
let myStr = '3';
let myArray = ['One', 'Two', 'Three'];
let myBoolean = true;

console.log('The value of my variable myNum is: ' + myNum);
console.log('The value of my variable MyStr is: ' + myStr);
console.log('The value of my variable myArray is: ' + myArray);
console.log('The value of my variable myBoolean is: ' + myBoolean);
console.log('The type of my variable myNum is: Number');
console.log(typeof myNum);
console.log('The type of my variable myStr is: String');
console.log(typeof myString);
console.log('The type of my variable myArray is: Object');
console.log(typeof myArray);
console.log('The type of my variable myBoolean is: Boolean');
console.log(typeof myBoolean);

if (myNum === myStr) {
  console.log(myNum + ' and ' + myStr + ' have same type');
} else {
  console.log(myNum + ' and ' + myStr + ' have different types');
}
if (myStr === myArray) {
  console.log(myStr + ' and ' + myArray + ' have same type');
} else {
  console.log(myStr + ' and ' + myArray + ' have different types');
}
if (myArray === myBoolean) {
  console.log(myArray + ' and ' + myBoolean + ' have same type');
} else {
  console.log(myArray + ' and ' + myBoolean + ' have different types');
};

// Task 9
let n = 7;
n = n % 3;
console.log(n);

let f = 8;
f = f % 3;
console.log(f);

let k = 29;
k = k % 5;
console.log(k);

// Task 10
let myDiffArray = [3, false, 'text', 1, 'car', true];
console.log(myDiffArray);

let myNum1 = 6 / 0;
let myNum2 = 10 / 0;
if (myNum1 === myNum2) {
  console.log('I can compare infinities');
} else {
  console.log('I can\'t compare infinities');
};