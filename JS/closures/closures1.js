const outer =()=>{
    console.log("outer function")
    
    const inner = ()=>{
        console.log("inner function")
    }
    inner()
}
outer()