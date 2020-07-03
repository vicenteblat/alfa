import React, { Component } from 'react';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="company-item col media py-3 mb-1">
                        <div className="company-info media-body">
                            <div className="company-head d-flex">
                                <span className="company-name">{item.companyName}</span>
                                <span className="apt-date ml-auto">{item.aptDate}</span>
                            </div>
            
                            <div className="contact-name">
                                <span className="label-item">Contact: </span>
                                <span>{item.contactName}</span>
                            </div>
                            <div className="company-notes">{item.companyNotes}</div>
                        </div>

                        <div className="ml-3">
                            <button className="company-delete btn btn-sm btn-danger">X</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListAppointments;