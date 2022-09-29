import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>Contact Details</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.props.selContact.picture.large} alt="" />
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            {this.props.selContact.name.last}
                                        </li>
                                        <li className="list-group-item">
                                            {this.props.selContact.location.city}
                                        </li>
                                        <li className="list-group-item">
                                            {this.props.selContact.phone}
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
