class Employee {
    e_Id = 101;
    get_Emp_Details() {
        return "Displaying emp Details"
    }
}
let e1 = new Employee();
let e2 = new Employee();
console.log(e1.e_Id)
console.log(e1.get_Emp_Details())