"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// Definition of the Student class
class Student {
    // Class attributes must be initialized
    // either with default values or in the constructor
    constructor(studID, firstName, lastName, percentage) {
        this.firstName = "NA"; // default value
        this.lastName = "NA"; // default value
        this.percentage = 0.0; // default value
        this.studID = studID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.percentage = percentage;
    }
    showDetails() {
        console.log(`Student ID: ${this.studID}, Name: ${this.firstName} ${this.lastName}, Percentage: ${this.percentage}`);
    }
}
exports.Student = Student;
