import React, { Component } from 'react';



class AddAppointments extends Component {

  constructor() {
    super()
    
    this.state = {
      companyName: '',
      contactName: '',
      companyNotes: '',
      aptDate: '',
      aptTime: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className={
        'card textcenter mt-3 ' +
        (this.props.formDisplay ? '' : 'add-appointment')
      }>
      <div 
        className="apt-addheading card-header bg-primary text-white"
        onClick={this.props.toggleForm}
      >
        <this.props.formIcon /> Add Appointment
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
                value={this.state.companyName}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="contactName"
                placeholder="Contact's Name"
                value={this.state.contactName}
                onChange={this.handleChange}
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
                value={this.state.aptDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="aptTime"
                id="aptTime"
                value={this.state.aptTime}
                onChange={this.handleChange}
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
                      value={this.state.companyNotes}
                      onChange={this.handleChange}
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