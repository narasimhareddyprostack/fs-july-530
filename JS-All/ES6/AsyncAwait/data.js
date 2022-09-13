//let employees = [{ id: 101, name: 'Rahul', salary: 45000 }, { id: 102, name: 'Sonia', salary: 55000 }];
let employees = [{ id: 101, name: 'Rahul', salary: 45000 }, { id: 102, name: 'Sonia', salary: 55000 }];
let createEmployee = (emp) => {
    console.log("Test Case 124")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            employees.push(emp);
            flag ? resolve("Data Inserted Successfully") : reject("Not Inserted")
        }, 4000);
    });
}
let getEmployees = () => {
    console.log("Test Case 125")
    setTimeout(() => {
        let rows = "";
        employees.forEach((employee) => {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                        </tr>`
        })
        document.getElementById('rajni').innerHTML = rows

    }, 1000)
}

let ready = async () => {
    console.log("Test Case 123")
    await createEmployee({ id: 103, name: 'Priyanka' })
    getEmployees()
}
ready()