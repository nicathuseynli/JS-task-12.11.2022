class Employee{
    constructor(name,salary,time){
        this.name = name;
        this.salary = salary;
        this.time = time;
    }
    
}
class Manager extends Employee{
    Hire(){
        console.log("Hi, i am manager, my name is " + this.name)
    }
}

let man1 = new Manager("Perviz",3100,"5 years");
let man2 = new Manager("Nijat",2500,"5 years");
man1.Hire(); man2.Hire();