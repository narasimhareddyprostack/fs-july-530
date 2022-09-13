let employees = [{ id: 101, name: 'Rahul', salary: 45000 }, { id: 102, name: 'Sonia', salary: 55000 }];
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            employees.push(emp);
            flag ? resolve("Data Inserted Successfully") : reject("Not Inserted")
        }, 4000);
    });
}
let getEmployees = () => {
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
createEmployee({ id: 103, name: 'priyanka', salary: 65000 })
    .then((msg) => {
        getEmployees()
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })
