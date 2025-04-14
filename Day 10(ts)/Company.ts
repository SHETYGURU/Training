import * as readlineSync  from 'readline-sync';

interface I_Employee{
    id:number;
    mid: number;
    name:string;
}

interface Department extends I_Employee{
    id:number;
    did:number;
}


const input:number=Number(readlineSync.question('Choose the details u want ?... 1.Employee 2.Manger : '))
class Employee implements Department{
    constructor(public id:number,public mid:number,public name:string, public did:number){
        this.id=id;
        this.mid=mid;
        this.name=name;
        this.did=did;
    }
    

    employee():void{
        console.log(`\nId:${this.id}, Manager ID: ${this.mid} , Name: ${this.name} Department Id : ${this.did}\n`)
    }
}

class Manager implements Department{
    constructor(public id:number,public mid:number,public name:string, public did:number){
       
        this.mid=mid;
        this.name=name;
        this.did=did;
    }
  

    manager():void{
        console.log(` \n  ID: ${this.id} , Name: ${this.name} Department Id : ${this.did}\n`)

    }
}

class Department implements Department{
    constructor(public id:number,public mid:number,public name:string, public did:number){
        this.id=id;
        this.mid=mid;
        this.name=name;
        this.did=did;
    }

    
}

if(input==1){
    var employee=new Employee(100,200,"Gururaj",300);
    var employee1=new Employee(101,201,"Pushpa",300);
    employee.employee();
    employee1.employee();
}


else if(input==2){
    var manager=new Manager(100,200,"Gururaj",300);
manager.manager();
}


else{
    console.log("Please select Valid Option")
}