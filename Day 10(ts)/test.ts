import * as readlineSync  from 'readline-sync';

interface User{
    id:number;
    email: string;
    name:string;
    role: string;
    // doInit(id:number, email:string, name:string, role:string):void;
}
let currentDate: Date = new Date();
let day= currentDate.getFullYear()+" " +currentDate.getMonth() + 1 + " " +currentDate.getDate();


interface I_Session extends User{
    id:number;
    session:string;
    
}
const input:string=readlineSync.question('Choose the details u want ?... 1.Student 2.Teacher 3.Admin : ');



class Student implements I_Session{
    constructor(public id:number,public email:string,public name:string, public role:string,public session:string){
        this.id=id;
        this.email=email;
        this.name=name;
        this.role=role;
        this.session=session;
    }
    

    employee():void{
        console.log(`\n Student Details :`)
        console.log(`\n Student Id:${this.id}, Student name : ${this.name} ,Email : ${this.email},Role : ${this.role}, Session : ${day}\n`)
    }
}

// class Student implements User{
  
//     public doInit(id:number, email:string, name:string, role:string):void{
//         console.log(`\n Student Details :`)
//         console.log(`\n Student Id:${this.id}, Student name : ${this.name} ,Email : ${this.email},Role : ${this.role}, Session : ${day}\n`)
//     }
// }
class Teacher implements User{
    constructor(public id:number,public email:string,public name:string, public role:string){
        this.id=id;
        this.email=email;
        this.name=name;
        this.role=role;
    }
  

    manager():void{
        console.log(`\n Teacher Details :`)

        console.log(`\n Teacher Id:${this.id}, Teacher name : ${this.name} ,Email : ${this.email}\n`)

    }
}

class Admin implements User{
    constructor(public id:number,public email:string,public name:string, public role:string){
        this.id=id;
        this.email=email;
        this.name=name;
        this.role=role;
    }

    dept():void{
        console.log(`\n Admin Details :`)

        console.log(`\n Admin Id:${this.id}, Admin name : ${this.name} ,Email : ${this.email}\n`)

    }
    
}

if(input=="1"){
    var student =new Student(100,"Gururaj", "g@gmail.com","student","Morning");
    var student1=new Student(101,"Pushpa", "p@gmail.com","student","Morning");
    student.employee();
    student1.employee();
}


else if(input=="2"){
    var teacher =new Teacher(100,"Gururaj", "g@gmail.com","Teacher");
    var teacher1=new Teacher(101,"Pushpa", "p@gmail.com","Teacher");
    teacher.manager();
    teacher1.manager();
}



else if(input=="3"){
    var admin =new Admin(100,"Gururaj", "g@gmail.com","Admin");
    var admin1=new Admin(101,"Pushpa", "p@gmail.com","Admin");
    admin.dept();
    admin1.dept();
}
else{
    console.log("Please select Valid Option")

}