import React, { Component } from 'react';

class AddAppointments extends Component {

  constructor() {
    super()

    this.state = {
      companyName: '',
      contactName: '',
      companyNotes: '',
      aptDate: '',
      aptTime: '',
      displayErrors: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    
    this.setState({ displayErrors: false });
    let tempApt = {
      companyName: this.state.companyName,
      contactName: this.state.contactName,
      companyNotes: this.state.companyNotes,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime
    }

    this.props.addAppointment(tempApt);

    this.setState({
      companyName: '',
      contactName: '',
      companyNotes: '',
      aptDate: '',
      aptTime: ''
    });

    this.props.toggleForm();
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
        <form 
          id="aptForm"
          noValidate
          onSubmit={this.handleAdd}
        >
          <div className="form-row">
            <div className={`form-group col-md-6 ${this.state.displayErrors ? 'was-validated' : ''}`}>
              <label>Company's Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                placeholder="Company's Name"
                value={this.state.companyName}
                onChange={this.handleChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please provide a Company Name</div>
            </div>

            <div className={`form-group col-md-6 ${this.state.displayErrors ? 'was-validated' : ''}`}>
              <label>Contact's Name</label>
              <input
                type="text"
                className="form-control"
                name="contactName"
                placeholder="Contact's Name"
                value={this.state.contactName}
                onChange={this.handleChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please provide a Contact Name</div>
            </div>
          </div>

          <div className="form-row justify-content-md-center">
            <div className={`form-group col-md-4 ${this.state.displayErrors ? 'was-validated' : ''}`}>
              <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a Valid Date</div>
            </div>
            
            <div className={`form-group col-md-4 ${this.state.displayErrors ? 'was-validated' : ''}`}>
              <label>Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a Valid Time</div>
            </div>
          </div>

          <div className="form-group form-row justify-content-md-center">
              <div className={`col-md-10 ${this.state.displayErrors ? 'was-validated' : ''}`}>
                <label>Company Notes</label>
                <textarea
                  type="text-area"
                  rows="4"
                  className="form-control"
                  name="companyNotes"
                  id="companyNotes"
                  placeholder="Company Notes"
                  value={this.state.companyNotes}
                  onChange={this.handleChange}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a Company Note</div>
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