"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var currentDate = new Date();
var day = currentDate.getFullYear() + " " + currentDate.getMonth() + 1 + " " + currentDate.getDate();
var input = readlineSync.question('Choose the details u want ?... 1.Student 2.Teacher 3.Admin : ');
var Student = /** @class */ (function () {
    function Student(id, email, name, role, session) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.session = session;
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.session = session;
    }
    Student.prototype.employee = function () {
        console.log("\n Student Details :");
        console.log("\n Student Id:".concat(this.id, ", Student name : ").concat(this.name, " ,Email : ").concat(this.email, ",Role : ").concat(this.role, ", Session : ").concat(day, "\n"));
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(id, email, name, role) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
    }
    Teacher.prototype.manager = function () {
        console.log("\n Teacher Details :");
        console.log("\n Teacher Id:".concat(this.id, ", Teacher name : ").concat(this.name, " ,Email : ").concat(this.email, "\n"));
    };
    return Teacher;
}());
var Admin = /** @class */ (function () {
    function Admin(id, email, name, role) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
    }
    Admin.prototype.dept = function () {
        console.log("\n Admin Details :");
        console.log("\n Admin Id:".concat(this.id, ", Admin name : ").concat(this.name, " ,Email : ").concat(this.email, "\n"));
    };
    return Admin;
}());
if (input == "1") {
    var student = new Student(100, "Gururaj", "g@gmail.com", "student", "Morning");
    var student1 = new Student(101, "Pushpa", "p@gmail.com", "student", "Morning");
    student.employee();
    student1.employee();
}
else if (input == "2") {
    var teacher = new Teacher(100, "Gururaj", "g@gmail.com", "student");
    var teacher1 = new Teacher(101, "Pushpa", "p@gmail.com", "student");
    teacher.manager();
    teacher1.manager();
}
else if (input == "3") {
    var admin = new Admin(100, "Gururaj", "g@gmail.com", "student");
    var admin1 = new Admin(101, "Pushpa", "p@gmail.com", "student");
    admin.dept();
    admin1.dept();
}
else {
    console.log("Please select Valid Option");
}
