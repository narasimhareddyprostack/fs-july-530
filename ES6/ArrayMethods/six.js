let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 101, name: "Sonia", sal: 55000 },
{ id: 101, name: "Priyanka", sal: 65000 }];

let eNames = employees.forEach((employee) => {
    return employee.name;
})
console.log(employees)

console.log(eNames)
