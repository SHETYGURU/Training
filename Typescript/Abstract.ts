abstract class Animal{
 makeSound():void{
 
 };
    move():void{
        console.log
        ("moving...");
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Woof");
    }
}

var dog= new Dog();
dog.move();
dog.makeSound();