console.log("------ VARIABLES TOPICS ------")
var Employee_Name = "Priya"
let Employee_ID = 101
const Salary = 20000
console.log(`Employee_Details -  Name : ${Employee_Name} , Emp_id : ${Employee_ID} , Salary :${Salary}`)

console.log("------ DATATYPE TOPICS --------")
const name = "Priya"
const age = 26
const iscourse = true
const isnull = null
const isUndefined = undefined
const arr = ["priya", 26, "Bangalore"]
const obj = { name: "Hema", age: 30, location: "Bangalore" }

console.log(`THE DATATYPES OF 
    String :  ${typeof name} ,
    Number : ${typeof age},
    Boolean : ${typeof iscourse},
    Null : ${typeof isnull},
    Undefined : ${typeof isUndefined},
    Array : ${typeof arr},
    Object : ${typeof obj}
      `)

console.log("-------- Operators ------")
let a = 10, b = 20;

console.log(`ADDITION OF TWO NUMBERS : ${a} + ${b} = ${a + b} `)
console.log(`SUBRACTION OF TWO NUMBERS : ${a} - ${b} = ${a - b} `)
console.log(`MULTIPLICATION OF TWO NUMBERS : ${a} * ${b} = ${a * b} `)
console.log(`DIVISION OF TWO NUMBERS : ${a} / ${b} = ${a / b} `)
console.log(`MODULUS OF TWO NUMBERS : ${a} % ${b} = ${a % b}`)

console.log("------- Conditional Statements ---------")
const marks = 89;
if (marks >= 90 && marks <= 100) {
    console.log("GRADE - A")
} else if (marks >= 75 && marks <= 89) {
    console.log("GRADE - B")
} else if (marks >= 50 && marks <= 74) {
    console.log("GRADE - C")
} else {
    console.log("FAIL")
}

console.log("------- Loops --------")
for (let i = 1; i <= 30; i++) {
    console.log(i)
}
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(`EVEN NUMBERS : ${i}`)
    }
}

console.log("-------- Functions --------")
function calculateSalary(salary, bonus) {
    let total_sal = salary + bonus;
    return total_sal;
}
const totalSalary = calculateSalary(20000, 5000)
console.log(`MY TOTAL_SALARY IS ${totalSalary}`)

console.log("-------- Arrow Functions --------")
const calculateDiscount = (price, discount) => {
    let discount_amt = price * (discount / 100);
    return final_price = price - discount_amt
}
const Final_Discount = calculateDiscount(1000, 20)

console.log(Final_Discount)

console.log("----- Callback Functions ------")
const login = (username, callback) => {
    callback(username);
}
const welcomes = (name) => {
    console.log(`Welcome ${name}`)
}
login('Priya', welcomes)

console.log("------- Higher Order Functions ------")
const calculate = (x, y, callback) => {
    return callback(x, y)
}
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const Addition = calculate(10, 20, add)
console.log(`ADDITION OF TWO NUMBERS : ${Addition} `)
const Subraction = calculate(20, 5, sub)
console.log(`SUBRACTION OF TWO NUMBERS : ${Subraction} `)
const Multipy = calculate(10, 5, mul)
console.log(`MULTIPLICATION OF TWO NUMBERS : ${Multipy} `)

console.log("------ Closures ------- ")
const wallet = () => {
    let balance = 500;
    const addMoney = (amount) => {
        balance = balance + amount
        console.log(`money added to ur wallet of ${amount} and ur current balance is ${balance}`)
    }

    const spendMoney = (amount) => {
        balance = balance - amount
        console.log(`money spend from ur wallet of ${amount} and ur current balance is ${balance}`)
    }

    const checkBalance = () => {
        return balance
    }
    return {
        addMoney,
        spendMoney,
        checkBalance
    }
}

const mywallet = wallet()
mywallet.addMoney(200)
mywallet.spendMoney(200)
console.log(mywallet.checkBalance())

console.log("----- Objects ------")
const employee = { id: 101, name: "priya", department: "IT", salary: 20000 }

const showDetails = () => {
    console.log(employee)

    const increment = (amt) => {
        employee.salary = employee.salary + amt;
        console.log(`Salary updated! New salary: ${employee.salary}`)
    }
    return increment
}
const incrementempdetails = showDetails()
incrementempdetails(200)

console.log("------ Nested Objects ------")
const employee_address = {city:"Bangalore",state:"karnataka",bank_name:"State of India",
    bank_details:{
        branch:"jayanagar",
        ifsc:3214,
        accountNumber:3456789009876
    }}

console.log(employee_address)