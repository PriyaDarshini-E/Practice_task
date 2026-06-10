const outer = () =>{
    let count =0;
    return inner =()=>{
        count++;
        console.log("count:"+count);
    }
    
}
const counter = outer();
counter();
counter();
counter();