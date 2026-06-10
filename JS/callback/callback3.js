const calculate = (num1, num2, callback) =>{
    console.log("Calculating...")
    callback(num1, num2);
    console.log("Calculation done.")
}

const add = (a,b) =>{
    let sum = a + b;
    console.log("Sum: " + sum);
}
const sub = (a,b) =>{``
    let diff = a - b;
    console.log("difference: " + diff);
}
calculate(10,5,add);
calculate(10,5,sub);
