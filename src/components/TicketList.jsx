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
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  TicketList: PropTypes.array
};

export default TicketList;
