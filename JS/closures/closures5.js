const wallet = ()=>{
    let balance = 500;
    const addMoney = (amount)=>{
        balance = balance + amount
       console.log(`money added to ur wallet of ${amount} and ur current balance is ${balance}`)
    }

    const spendMoney = (amount)=>{
        balance = balance - amount
        console.log(`money spend from ur wallet of ${amount} and ur current balance is ${balance}`)
    }

    const checkBalance = ()=>{
        return balance
    }
    return{
        addMoney,
        spendMoney,
        checkBalance
    }
}

const mywallet = wallet()
mywallet.addMoney(200)
mywallet.spendMoney(200)
console.log(mywallet.checkBalance())