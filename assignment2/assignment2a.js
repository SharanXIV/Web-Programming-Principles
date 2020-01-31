/*********************************************************************************
* WEB222 – Assignment 02a
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Sharan Shanmugaratnam | Student ID: 153601174 | Date: June 7th, 2018
*
********************************************************************************/

/*****************************
* Step 1
*****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/

function capFirstLetter(a){
  var stringA = a.substr(0,1).toUpperCase();
  var stringB = a.substring(1,a.length).toLowerCase();
  var capFirst = stringA + stringB;
  return capFirst;
}

e1 = prompt("Please enter your name: ", "Sharan");

//console.log(capFirstLetter(e1));

/*****************************
* Step 3
*****************************/

var getAge = function (birthYear){
  var yearNow = new Date().getFullYear();
  var age = yearNow - birthYear;
  return age
}

e2 = prompt("Please enter your birth year: ",1989);
e2 = getAge(e2);
//console.log(e2);

/*****************************
* Step 4
*****************************/

e3 = prompt("Please enter the name of the college you attend: ", "seneca college");
var split = e3.split(" ");
var caps = [];
for (var i = 0; i < split.length; i++){
  caps[i] = capFirstLetter(split[i]);
}

e3 = caps.join(" ");
//console.log(e3);

/*****************************
* Step 5
*****************************/

e4 = prompt("Please enter your 5 favourite sports (lower case, comma seperated): ", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/,"soccer");
e4 = e4.split(",");
e5 = prompt("Please enter an extra favourite sport: ","formula 1");
e4.push(e5);

//console.log(e4);

/*****************************
* Step 6
*****************************/

for (var i = 0; i < e4.length; i++){
  e4[i] = e4[i].toUpperCase();
}
e4.sort()

//console.log(e4);

/*****************************
* Step 7
*****************************/

function getDateString(x){
  var year = x.getFullYear();
  var month = x.getMonth() + 1;
  var day = x.getDate();
  
  if (month < 10){
    month = "0" + month;
  }
  if (day < 10){
    day = "0" + day;
  }
  
  return year + "-" + month + "-" + day;
}

e6 = new Date();
e7 = getDateString(e6);

//console.log(e7);

/*****************************
* Step 8
*****************************/

str = "User info: \n\n" + 
      "name (e1): " + e1 + "\n" +
      "age (e2): " + e2 + "\n" + 
      "school (e3): " + e3 + "\n" +
      "favorite sports (e4): " + "\n" +
          "\t\t" + e4[0] + "\n" +
          "\t\t" + e4[1] + "\n" +
          "\t\t" + e4[2] + "\n" +
          "\t\t" + e4[3] + "\n" +
          "\t\t" + e4[4] + "\n" +
          "\t\t" + e4[5] + "\n" +
      "current date (e7): " + e7

console.log(str);

