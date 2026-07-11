const student = {
    name:"Priya",
    age: 26,
    showDetails(){
        console.log(`Name = ${this.name},Age = ${this.age}`)
    }
}
student.showDetails()

const Employee ={
    id:101,
    name:"Priya",
    Salary:20000,
    showSalary(){
        console.log(this.Salary)
    },
    increaseSalary(amount){
        total_sal = this.Salary + amount;
        console.log(`Basic salary is ${this.Salary} , increment amt is ${amount} then total_salary is ${total_sal} `)
    }
}
Employee.showSalary();

Employee.increaseSalary(5000);
