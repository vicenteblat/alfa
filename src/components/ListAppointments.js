import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import Moment from 'react-moment';


class ListAppointments extends Component {
    
    render() {
        if (this.props.appointments.length === 0) {
            return (
                <div className="alert alert-danger" role="alert">
                    Sorry, no appointments were found. Please adjust your search criteria and try again.
                </div>
            );
        } else {
            return (
                <div className="appointment-list item-list mb-3">
                    {this.props.appointments.map(item => (
                        <div className="company-item col media py-3 mb-1" key={item.aptId}>
                            <div className="company-info media-body">
                                <div className="company-head d-flex">
                                    <span 
                                        className="company-name"
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={e =>
                                            this.props.updateInfo(
                                                'companyName',
                                                e.target.innerText,
                                                item.aptId
                                            )
                                        }
                                    >
                                        {item.companyName}
                                    </span>
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
                                    <span
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={e => 
                                            this.props.updateInfo(
                                                'contactName',
                                                e.target.innerText,
                                                item.aptId
                                            )
                                        }
                                    >
                                        {item.contactName}
                                    </span>
                                    <span className="apt-date ml-auto">
                                        <Moment
                                            date={item.aptDate}
                                            parse="YYYY-MM-dd hh:mm"
                                            format="hh:mma"
                                        />
                                    </span>
                                </div>
                                <div 
                                    className="company-notes"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={e => 
                                        this.props.updateInfo(
                                            'companyNotes',
                                            e.target.innerText,
                                            item.aptId
                                        )
                                    }
                                >
                                    {item.companyNotes}
                                </div>
                            </div>
    
                            <div className="ml-3">
                                <div>
                                    <button 
                                        className="company-delete btn btn-sm btn-danger"
                                        onClick={() => this.props.deleteAppointment(item)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <button 
                                        className={
                                            'btn btn-sm btn-info'
                                            // ${this.props.editable ? 'focus' : ''}`
                                        }
                                        // onClick={() => this.props.editableApt(item)}
                                    >
                                        <MdEdit />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default ListAppointments;

