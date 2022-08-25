class Account {
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Succesfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully")
    }
    withdrawl() {
        console.log("No Amount")
    }
    get_Bal() {
        console.log("100 CR")
    }
    get_St() {
        console.log("Wait some time")
    }
    close_Account() {
        console.log("do immidealtely")
    }
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.get_St()
a1.close_Account()