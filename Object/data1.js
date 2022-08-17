let employees = [{ id: 101, name: 'Rahul' },
{ id: 102, name: "Sonia" },
{ id: 103, name: "Priyanka" }
]
console.log(employees.length)
for (emp of employees) {
    //console.log(emp)
    console.log(emp.name)
}