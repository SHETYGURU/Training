class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    greet(): void{
        console.log(`Hello ,my name is ${this.name}`);
    }

}

class Student_P extends Person{
    grade: number;
    constructor(name:string,grade:number){
        super(name);
        this.grade=grade;
    }

    gradef():void{
        console.log(`Hello ,my name is ${this.name} ,my Grade is ${this.grade} `)
    }
}
var grade1:number =90;
var name1 : string='Guru';
 var a= new Person(name1);
 var gr= new Student_P(name1,grade1);
 a.greet();
 gr.greet();
 gr.gradef();