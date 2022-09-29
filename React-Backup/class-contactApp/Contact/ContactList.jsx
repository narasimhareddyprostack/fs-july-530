import React, { Component } from 'react'

class ContactList extends Component {
    selectedContact = (contact) => {
        //console.log("Mic Testing")
        //console.log(contact.name.first)
        this.props.selContact(contact);
    }
    render() {
        return (
            <div>

                <h1>Contact  List </h1>
                {/*  <pre>{JSON.stringify(this.props)}</pre> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.contacts.map((contact, index) => {
                                            return <tr key={index} onMouseOver={this.selectedContact.bind(this, contact)}>
                                                <td>{contact.login.uuid.substr(0, 3)}</td>
                                                <td>{contact.name.first}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.dob.age}</td>
                                                <td>{contact.location.city}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList
