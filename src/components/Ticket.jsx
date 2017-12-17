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

  return(
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{timeSinceOpened}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpened: PropTypes.number.isRequired
};

export default Ticket;
