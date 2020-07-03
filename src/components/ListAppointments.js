import React, { Component } from 'react';

class ListAppointments extends Component {
    render() {
        const listItems = this.props.appointments.map(item => (
            <div>{item.companyName}</div>
          ));

        return <div>{listItems}</div>;
    }
}

export default ListAppointments;