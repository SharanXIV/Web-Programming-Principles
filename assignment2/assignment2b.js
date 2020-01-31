/*********************************************************************************
* WEB222 – Assignment 02b
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Sharan Shanmugaratnam | Student ID: 153601174 | Date: June 7th, 2018
*
********************************************************************************/


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

lastCourse = courses.pop();

console.log("*** Task 1 ***\n\n");
console.log("Course " + lastCourse.code + " was deleted from the array (courses)");

var ibc233 = { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/'};
var oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/'};
var web222 = { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/'};
var dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/'};

console.log("Adding new course objects into the array (courses)\n\n");

courses.push(ibc233, oop244, web222, dbs201);

console.log("Course objects in the array (courses): \n");

for (var i = 0; i < courses.length; i++){
    console.log('"' + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, website: " + courses[i].url + '"');
}

// task 2

var s1 = Object.create (student);
var s2 = Object.create (student);
var s3 = Object.create (student);
var s4 = Object.create (student);

s1.name = "John Smith";
s1.dob = new Date(1999, 8, 10);
s1.sid = "010456101";
s1.program = "CPA";
s1.gpa = 4

s2.name = "Jim Carrey";
s2.dob = new Date(1992, 0, 17);
s2.sid = "012345678";
s2.program = "CPD";
s2.gpa = 3.5

s3.name = "Justin Bieber";
s3.dob = new Date(1994, 2, 1);
s3.sid = "0987654321";
s3.program = "CAN";
s3.gpa = 3

s4.name = "Justin Trudeau";
s4.dob = new Date(1992, 0, 12);
s4.sid = "123456789";
s4.program = "CAN";
s4.gpa = 4

var students = [];
students.push(s1,s2,s3,s4);

console.log("\n*** Task 2 ***\n\n");
console.log("Student objects in the array (students): ");


function myFunction(item, index) {
console.log(index + ": " + item);
}

students.forEach(myFunction);


