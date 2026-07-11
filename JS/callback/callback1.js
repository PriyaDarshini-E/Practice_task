// const sayhi =(name,mesg)=>{
//     console.log("hello"+name);
//     mesg()
    
// }
// const saybye = ()=>{
// console.log("bye");

// }
// sayhi("Priya",saybye)

const total =(x,y,callback)=>{
//console.log(x,y);
callback(x,y)

}

const stud =(a,b)=>{
    //console.log("hi"+a,+b);
    let c= a+b;
    console.log("addition :"+c);
}
total(10,20,stud)

const 