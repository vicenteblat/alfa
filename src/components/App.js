import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import { without } from 'lodash';

import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: false,
      formIcon: FaAngleDown,
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this); //This allows the 'this.setState()' method in deleteAppointment() to refer to the whole object
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    let tempIcon = this.state.formIcon;
    if (this.state.formDisplay) {
      tempIcon = FaAngleDown
    } else {
      tempIcon = FaAngleUp
    }
    this.setState({
      formDisplay: !this.state.formDisplay,
      formIcon: tempIcon
    });
  }

  deleteAppointment(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt); //Uses without method from lodash to return array of apts without deleted apt

    this.setState ({
      myAppointments: tempApts
    })
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1});
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
  }


  render() {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments 
                formDisplay={this.state.formDisplay}
                formIcon={this.state.formIcon}
                toggleForm={this.toggleForm}
              />
              <SearchAppointments />
              <ListAppointments 
                appointments={this.state.myAppointments}
                deleteAppointment={this.deleteAppointment}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
