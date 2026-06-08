const outer =()=>{
    let count = 0;
    const inner =()=>{
        count++;
        console.log(count);
}
return inner;
}

const closure = outer();
closure()
closure()