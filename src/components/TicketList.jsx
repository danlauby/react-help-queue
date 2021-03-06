import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.description}
          timeOpened={ticket.timeOpened}
          key={ticket.id}
          id={ticket.id}
          currentRoute={props.currentRoute}
          handleClosingTicket={props.handleClosingTicket}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string,
  handleClosingTicket: PropTypes.func
};

export default TicketList;
