class Account {
    constructor(name, email) {
        this.acc_Name = name;
        this.acc_Email = email
    }
}
class Saving_Account extends Account {
    constructor(id, name, email, amount) {
        super(name, email);
        this.acc_Id = id;
        this.acc_Amount = amount
    }
}
let c1 = new Saving_Account(101, 'Rahul', 'rahul@gmail.com', 50000)
console.log(c1)