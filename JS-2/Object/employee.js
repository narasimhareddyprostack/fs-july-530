let employee = {
    id: 101,
    name: "Rahul",
    sal: 45000
}
console.log(employee)
employee.sal = 55000
employee.loc = "Wayanad"
employee.name = "Rahul Gandhi"
delete employee.id
console.log(employee)