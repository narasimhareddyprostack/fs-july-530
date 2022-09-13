class Employee {
    eId;
    eName;
    eSal;
    constructor(id, name, sal) {
        console.log("Test Case 123")
        this.eId = id;
        this.eName = name;
        this.eSal = sal
    }
    get_Details() {
        console.log("Displaying Details")
    }
}
let e1 = new Employee(101, "Rahul Gandhi", 45000)
let e2 = new Employee(102, "Sonia", 55000)
console.log(e1)
console.log(e2)

e1.get_Details()
e1.get_Details()
e1.get_Details()
e1.get_Details()
e1.get_Details()
e2.get_Details()
e2.get_Details()
e2.get_Details()
e2.get_Details()