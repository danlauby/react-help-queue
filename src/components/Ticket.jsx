import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  var ticketStyles = {
    fontFamily: "Roboto",
    padding: "10px",
  }
    return(
      <div style={ticketStyles}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
    );
  }


Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
