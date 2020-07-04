import React, { Component } from 'react';

class AddAppointments extends Component {
    render() {
        return (
            <div className={
              'card textcenter mt-3 ' +
              (this.props.formDisplay ? '' : 'add-appointment')
            }>
            <div className="apt-addheading card-header bg-primary text-white">
              Add Appointment
            </div>
  
            <div className="card-body">
              <form id="aptForm" noValidate>
                <div className="form-group form-row justify-content-md-center">
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      placeholder="Company's Name"
                    />
                  </div>

                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      name="contactName"
                      placeholder="Contact's Name"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row justify-content-md-center">
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      name="aptDate"
                      id="aptDate"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="time"
                      className="form-control"
                      name="aptTime"
                      id="aptTime"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row justify-content-md-center">
                    <div className="col-md-10">
                        <textarea
                            className="form-control"
                            rows="4"
                            cols="50"
                            name="companyNotes"
                            id="companyNotes"
                            placeholder="Company Notes"
                        />
                    </div>
                </div>
  
                <div className="form-group form-row justify-content-md-center">
                  <div className="">
                    <button
                      type="submit"
                      className="btn btn-primary d-block"
                    >
                      Add Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default AddAppointments;