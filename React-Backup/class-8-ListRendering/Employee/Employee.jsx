import React from 'react'
class Employee extends React.Component {
    constructor(props) {
        super(props);
        console.log("First Constructor.....")
        this.state = {
            employees: [{ "id": 1, "first_name": "Rani", "last_name": "Patrickson", "email": "rpatrickson0@merriam-webster.com", "gender": "Female" },
            { "id": 2, "first_name": "Tito", "last_name": "Bosquet", "email": "tbosquet1@nature.com", "gender": "Male" },
            { "id": 3, "first_name": "Harv", "last_name": "Inglis", "email": "hinglis2@whitehouse.gov", "gender": "Male" },
            { "id": 4, "first_name": "Taddeo", "last_name": "Shorthouse", "email": "tshorthouse3@cbsnews.com", "gender": "Male" },
            { "id": 5, "first_name": "Silvana", "last_name": "Tomenson", "email": "stomenson4@exblog.jp", "gender": "Female" },
            { "id": 6, "first_name": "Godard", "last_name": "Feely", "email": "gfeely5@yolasite.com", "gender": "Male" },
            { "id": 7, "first_name": "Isidora", "last_name": "Guess", "email": "iguess6@wikipedia.org", "gender": "Polygender" },
            { "id": 8, "first_name": "Faith", "last_name": "Gidney", "email": "fgidney7@archive.org", "gender": "Female" },
            { "id": 9, "first_name": "Illa", "last_name": "Skipworth", "email": "iskipworth8@purevolume.com", "gender": "Female" },
            { "id": 10, "first_name": "Maxy", "last_name": "Skrines", "email": "mskrines9@reverbnation.com", "gender": "Polygender" },
            { "id": 11, "first_name": "Manda", "last_name": "Orring", "email": "morringa@e-recht24.de", "gender": "Female" },
            { "id": 12, "first_name": "Marje", "last_name": "Purchase", "email": "mpurchaseb@hatena.ne.jp", "gender": "Female" },
            { "id": 13, "first_name": "Nicola", "last_name": "Woffenden", "email": "nwoffendenc@list-manage.com", "gender": "Female" },
            { "id": 14, "first_name": "Raddy", "last_name": "Garrish", "email": "rgarrishd@linkedin.com", "gender": "Male" },
            { "id": 15, "first_name": "Leanor", "last_name": "Pontain", "email": "lpontaine@slashdot.org", "gender": "Female" },
            { "id": 16, "first_name": "Shalom", "last_name": "Grinov", "email": "sgrinovf@umn.edu", "gender": "Male" },
            { "id": 17, "first_name": "Madella", "last_name": "Gilffilland", "email": "mgilffillandg@com.com", "gender": "Female" },
            { "id": 18, "first_name": "Ashbey", "last_name": "Bamford", "email": "abamfordh@pbs.org", "gender": "Male" },
            { "id": 19, "first_name": "Morry", "last_name": "Hearnaman", "email": "mhearnamani@nasa.gov", "gender": "Male" },
            { "id": 20, "first_name": "Merrill", "last_name": "Hillum", "email": "mhillumj@boston.com", "gender": "Female" },
            { "id": 21, "first_name": "Genvieve", "last_name": "Frediani", "email": "gfredianik@github.com", "gender": "Female" },
            { "id": 22, "first_name": "Belle", "last_name": "Smetoun", "email": "bsmetounl@comsenz.com", "gender": "Female" },
            { "id": 23, "first_name": "Kattie", "last_name": "Vivian", "email": "kvivianm@pinterest.com", "gender": "Genderqueer" },
            { "id": 24, "first_name": "Giustino", "last_name": "Almeida", "email": "galmeidan@soundcloud.com", "gender": "Male" },
            { "id": 25, "first_name": "Clary", "last_name": "Safhill", "email": "csafhillo@home.pl", "gender": "Female" },
            { "id": 26, "first_name": "Tabb", "last_name": "Acarson", "email": "tacarsonp@oakley.com", "gender": "Male" },
            { "id": 27, "first_name": "Bonita", "last_name": "Rigby", "email": "brigbyq@list-manage.com", "gender": "Female" },
            { "id": 28, "first_name": "Karly", "last_name": "Durtnal", "email": "kdurtnalr@vkontakte.ru", "gender": "Non-binary" },
            { "id": 29, "first_name": "Gram", "last_name": "Britney", "email": "gbritneys@bloglovin.com", "gender": "Male" },
            { "id": 30, "first_name": "Rad", "last_name": "Ughelli", "email": "rughellit@blogs.com", "gender": "Male" },
            { "id": 31, "first_name": "Caryl", "last_name": "Hallihan", "email": "challihanu@hibu.com", "gender": "Female" },
            { "id": 32, "first_name": "Gris", "last_name": "Bunclark", "email": "gbunclarkv@stumbleupon.com", "gender": "Male" },
            { "id": 33, "first_name": "Corney", "last_name": "Demke", "email": "cdemkew@jugem.jp", "gender": "Male" },
            { "id": 34, "first_name": "Kaspar", "last_name": "Tracy", "email": "ktracyx@soup.io", "gender": "Male" },
            { "id": 35, "first_name": "Kipper", "last_name": "Hilbourne", "email": "khilbourney@mashable.com", "gender": "Male" },
            { "id": 36, "first_name": "Bella", "last_name": "Talman", "email": "btalmanz@bigcartel.com", "gender": "Female" },
            { "id": 37, "first_name": "Emma", "last_name": "Jelley", "email": "ejelley10@ihg.com", "gender": "Female" },
            { "id": 38, "first_name": "Brande", "last_name": "Silson", "email": "bsilson11@plala.or.jp", "gender": "Female" },
            { "id": 39, "first_name": "Megan", "last_name": "Connerry", "email": "mconnerry12@reference.com", "gender": "Female" },
            { "id": 40, "first_name": "Terry", "last_name": "Cholmondeley", "email": "tcholmondeley13@hhs.gov", "gender": "Genderfluid" },
            { "id": 41, "first_name": "Kaila", "last_name": "Wakley", "email": "kwakley14@angelfire.com", "gender": "Female" },
            { "id": 42, "first_name": "Hagen", "last_name": "Bruntjen", "email": "hbruntjen15@woothemes.com", "gender": "Male" },
            { "id": 43, "first_name": "Sacha", "last_name": "Valencia", "email": "svalencia16@cbsnews.com", "gender": "Bigender" },
            { "id": 44, "first_name": "Shel", "last_name": "Sinderland", "email": "ssinderland17@apache.org", "gender": "Female" },
            { "id": 45, "first_name": "Keenan", "last_name": "Plessing", "email": "kplessing18@theglobeandmail.com", "gender": "Male" },
            { "id": 46, "first_name": "Barty", "last_name": "Jobbins", "email": "bjobbins19@wix.com", "gender": "Male" },
            { "id": 47, "first_name": "Junette", "last_name": "Channing", "email": "jchanning1a@facebook.com", "gender": "Bigender" },
            { "id": 48, "first_name": "Karolina", "last_name": "Skeleton", "email": "kskeleton1b@about.me", "gender": "Female" },
            { "id": 49, "first_name": "Bette", "last_name": "Dukelow", "email": "bdukelow1c@pcworld.com", "gender": "Female" },
            { "id": 50, "first_name": "Gannon", "last_name": "Broschek", "email": "gbroschek1d@google.fr", "gender": "Bigender" }]
        }
    }
    render() {
        console.log("Second - Render () method")
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Index</th>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((emp, index) => {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{emp.id}</td>
                                        <td>{emp.first_name}</td>
                                        <td>{emp.last_name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default Employee