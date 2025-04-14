var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello ,my name is ".concat(this.name));
    };
    return Person;
}());
var Student_P = /** @class */ (function (_super) {
    __extends(Student_P, _super);
    function Student_P(name, grade) {
        var _this = _super.call(this, name) || this;
        _this.grade = grade;
        return _this;
    }
    Student_P.prototype.gradef = function () {
        console.log("Hello ,my name is ".concat(this.name, " ,my Grade is ").concat(this.grade, " "));
    };
    return Student_P;
}(Person));
var grade1 = 90;
var name1 = 'Guru';
var a = new Person(name1);
var gr = new Student_P(name1, grade1);
a.greet();
gr.greet();
gr.gradef();
