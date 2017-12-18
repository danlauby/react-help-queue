import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props) {

  var ticketStyles = {
    fontFamily: "Roboto",
    padding: "10px",
  };

  const timeSinceOpened = new Moment().to(props.timeOpened);
  console.log(timeSinceOpened);

  let ticketDetails =
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{timeSinceOpened}</p>
    </div>;
    
    if (props.currentRoute === "/admin") {
      return (
        <div>
          {ticketDetails}
          <button onClick={() => { props.handleClosingTicket(props.id)} }>Close Ticket</button>
          <hr/>
        </div>
      );
    } else {
      return (
        <div>
          {ticketDetails}
          <hr/>
        </div>
      );
    }
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpened: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  currentRoute: PropTypes.string,
  handleClosingTicket: PropTypes.func
};

export default Ticket;
