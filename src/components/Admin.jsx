import React from "react";
import TicketList from "./TicketList";
import { connect } from "react-redux";


class Admin extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome Admins!</h3>
        <TicketList ticketList={this.props.adminMasterTicketList}></TicketList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    adminMasterTicketList: state
  }
}

export default connect(mapStateToProps)(Admin);
