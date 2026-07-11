const acc = ()=>{
    var custname ="Priya";
    let bankbal= 0;

const credit = (amt)=>{
        bankbal = bankbal+amt;
        console.log(`money credited to ur acc of ${amt} and ur balance is ${bankbal}`)
    }

const debit =(amt)=>{
        bankbal = bankbal-amt;
        console.log(`money debited to ur acc of ${amt} and ur balance is ${bankbal}`)
    }
    const balcheck = ()=>{
        console.log(`ACC HOLDER NAME ${custname} your current balance is ${bankbal}`)
}
    return {
        credit,
        debit,
        balcheck

}
}


const myAccount = acc();
myAccount.credit(1000);
myAccount.debit(500);
myAccount.credit(1000);


// const accbal =()=>{
//     let bankbal =10000;
//     return credit =()=>{
//         bankbal=bankbal+1000;
//         console.log(bankbal)
//     }
// }
// const mybal = accbal();
// mybal();
