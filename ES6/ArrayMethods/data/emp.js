let employees = [{ "id": 1, "name": "Trisha", "email": "tbirkmyr0@smh.com.au", "gender": "Female" },
{ "id": 2, "name": "Virge", "email": "vbalston1@wikia.com", "gender": "Male" },
{ "id": 3, "name": "Sibylle", "email": "sbrandli2@drupal.org", "gender": "Female" },
{ "id": 4, "name": "Verine", "email": "vlammenga3@liveinternet.ru", "gender": "Female" },
{ "id": 5, "name": "Neddie", "email": "nfaveryear4@indiatimes.com", "gender": "Male" }]

function display_Data() {
    let rows = ""
    employees.forEach((employee) => {
        rows = rows + `<tr>
                        <td> ${employee.id}</td>
                        <td> ${employee.name.toUpperCase()}</td>
                        <td> ${employee.email}</td>
                        <td> ${employee.gender.substr(0, 1)}</td>
                    </tr>`
    })
    //document.getElementById('tbody_Data').innerHTML = "Good Evening"
    document.getElementById('tbody_Data').innerHTML = rows
}