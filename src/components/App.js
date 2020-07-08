import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import { without, findIndex } from 'lodash';

import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: false,
      formIcon: FaAngleDown,
      orderBy: 'companyName',
      orderDir: 'asc',
      queryText: '',
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this); //This allows the 'this.setState()' method in deleteAppointment() to refer to the whole object
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchApts = this.searchApts.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
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

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  searchApts(query) {
    this.setState({
      queryText: query
    });
  }

  makeEditable(id) {
    let tempApts = this.state.myAppointments;
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    });

    tempApts[aptIndex]["editable"] = !tempApts[aptIndex]["editable"];
    this.setState({
      myAppointments: tempApts
    });
  }

  updateInfo(name, value, id) {
    let tempApts = this.state.myAppointments;
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    });

    tempApts[aptIndex][name] = value;
    this.setState({
      myAppointments: tempApts
    });
  }
  
  addAppointment(apt) {
    let tempApts = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt); //Javascript method. Adds apt to the start of the apt array
    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    })
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

    let order;
    let filteredApts = this.state.myAppointments;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort( (a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem['companyName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['contactName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['companyNotes']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
    });

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
                addAppointment={this.addAppointment}
              />
              <SearchAppointments
                orderBy={this.state.orderBy}
                orderDir={this.state.orderDir}
                changeOrder={this.changeOrder}
                searchApts={this.searchApts}
              />
              <ListAppointments 
                appointments={filteredApts}
                deleteAppointment={this.deleteAppointment}
                updateInfo={this.updateInfo}
                makeEditable={this.makeEditable}
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
