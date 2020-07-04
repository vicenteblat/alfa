import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="company-item col media py-3 mb-1" key={item.aptId}>
                        <div className="company-info media-body">
                            <div className="company-head d-flex">
                                <span className="company-name">{item.companyName}</span>
                                <span className="apt-date ml-auto">
                                    <Moment
                                        date={item.aptDate}
                                        parse="YYYY-MM-dd hh:mm"
                                        format="MMM / DD / YYYY"
                                    />
                                </span>
                            </div>
            
                            <div className="contact-name d-flex">
                                <span className="label-item">Contact:</span>
                                <span className="text-white">a</span>
                                <span>{item.contactName}</span>
                                <span className="apt-date ml-auto">
                                    <Moment
                                        date={item.aptDate}
                                        parse="YYYY-MM-dd hh:mm"
                                        format="hh:mma"
                                    />
                                </span>
                            </div>
                            <div className="company-notes">{item.companyNotes}</div>
                        </div>

                        <div className="ml-3">
                            <button 
                                className="company-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteAppointment(item)}
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListAppointments;