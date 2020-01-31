/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Sharan Shanmugaratnam | Student ID: 153601174 | Date: May 15th, 2018
*
********************************************************************************/


/*****************************
* Task 1
*****************************/
var studentName = 'Sharan Shanmugaratnam';
var noOfCourses = 4;
var program = 'CPA';
var partTimeJob = 'don\'t have';
console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking ' + noOfCourses + ' course in this semester.');
console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking ' + noOfCourses + ' course in this semester and I ' + partTimeJob + ' a part‐time job now.');

/*****************************
* Task 2
*****************************/
var currentYear = 2018;
var age = prompt('Please enter your age: ');
var birthYear = currentYear - age;
console.log('You were born in the year of ' + birthYear + '.');
var yearsInCollege = prompt('Enter the number of years you expect to study in the college:');
var graduateYear = + currentYear + + yearsInCollege;
console.log('You will graduate from Seneca college in the year of ' + graduateYear + '.');

/*****************************
* Task 3
*****************************/
var celsius = 23;
console.log(celsius + '°C is ' + (celsius * (9 / 5) + 32) + '°F');
var fahrenheit = 23;
console.log(fahrenheit + '°F is ' + ((fahrenheit - 32) * (5 / 9)) + '°C');

/*****************************
* Task 4
*****************************/
for (var i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i + ' is even.');
  } 
  else {
    console.log(i + ' is odd.');
  };
};

/*****************************
* Task 5
*****************************/
function largerNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } 
  else {
    return num2;
  };
};
var greaterNum = function (num3, num4) {
  if (num3 > num4) {
    return num3;
  } 
  else {
    return num4;
  };
};
console.log('The larger number of 2 and 4 is ' + largerNum(2, 4));
console.log('The larger number of 5 and 3 is ' + largerNum(5, 3));
console.log('The larger number of 1 and 6 is ' + greaterNum(1, 6));
console.log('The larger number of 9 and 7 is ' + greaterNum(9, 7));

/*****************************
* Task 6
*****************************/
function Evaluator() {
  var sum = 0;
  var average
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  average = (sum / arguments.length);
  if (average >= 50) {
    return 'true';
  } 
  else {
    return 'false';
  }
}
console.log('Average greater than or equal to 50: ' + Evaluator(52, 50));
console.log('Average greater than or equal to 50: ' + Evaluator(2, - 6, 8));
console.log('Average greater than or equal to 50: ' + Evaluator(23, 824, 23));

/*****************************
* Task 7
*****************************/
var Grader = function(mark) {
  var grade;
  if (mark >= 80){
  grade = 'A';
  }
  else if (mark >= 70){
  grade = 'B';
  }
  else if (mark >= 60){
  grade = 'C';
  }
  else if (mark >= 50){
  grade = 'D';
  }
  else{
  grade = 'F';
  }
  return grade;
};
console.log('Your grade: ' + Grader(75));
console.log('Your grade: ' + Grader(95));
console.log('Your grade: ' + Grader(55));

/*****************************
* Task 8
*****************************/
function showMultiples(num, numMultiples) {
  for (var i = 1; i <= numMultiples; i++) {
    console.log(num + ' x ' + i + ' = ' + (num * i));
  }
}
showMultiples(5, 5);
showMultiples(3, 14);
showMultiples(11, 5);
