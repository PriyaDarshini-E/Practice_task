const execute =(callback)=>{
    // return "callback executed "
    callback()
    return "callback executed "
    
}

const greet =()=>{
    console.log("hello world");
}
const result = execute(greet);
console.log(result);
