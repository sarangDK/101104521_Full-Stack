console.log("Starting execution");


// Variable declarations and reassignments
let b = 20;
b = 100;
b = "Hello";

// Object literal
var student = {
    100: 'Hundred',
    studentId: 1,
    studentName: "John",
    studentAge: 20,
    city: "Korea"
};

console.log(student);
console.log(student.studentName);
console.log(typeof student);

// Loop through the student object
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

for (let key in student) {
    console.log(`${key} -> ${student[key]}`);
}

// Object destructuring
var emp = {
    empId: 1,
    empName: "John",
    empAge: 20,
    empCity: "Korea"
};

var { empId, empName, empAge, empCity } = emp;
var result = "pass";
console.log(empId);

var newEmp = {
    eid: empId,
    empName,
    empAge,
    empCity,
    result
};

console.log(newEmp);
