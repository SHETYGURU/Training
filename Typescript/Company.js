"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var input = Number(readlineSync.question('Choose the details u want ?... 1.Employee 2.Manger : '));
var Employee = /** @class */ (function () {
    function Employee(id, mid, name, did) {
        this.id = id;
        this.mid = mid;
        this.name = name;
        this.did = did;
        this.id = id;
        this.mid = mid;
        this.name = name;
        this.did = did;
    }
    Employee.prototype.employee = function () {
        console.log("\nId:".concat(this.id, ", Manager ID: ").concat(this.mid, " , Name: ").concat(this.name, " Department Id : ").concat(this.did, "\n"));
    };
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager(id, mid, name, did) {
        this.id = id;
        this.mid = mid;
        this.name = name;
        this.did = did;
        this.mid = mid;
        this.name = name;
        this.did = did;
    }
    Manager.prototype.manager = function () {
        console.log(" \n Manager ID: ".concat(this.mid, " , Name: ").concat(this.name, " Department Id : ").concat(this.did, "\n"));
    };
    return Manager;
}());
var Department = /** @class */ (function () {
    function Department(id, mid, name, did) {
        this.id = id;
        this.mid = mid;
        this.name = name;
        this.did = did;
        this.id = id;
        this.mid = mid;
        this.name = name;
        this.did = did;
    }
    return Department;
}());
if (input == 1) {
    var employee = new Employee(100, 200, "Gururaj", 300);
    var employee1 = new Employee(101, 201, "Pushpa", 300);
    employee.employee();
    employee1.employee();
}
else if (input == 2) {
    var manager = new Manager(100, 200, "Gururaj", 300);
    manager.manager();
}
else {
    console.log("Please select Valid Option");
}
