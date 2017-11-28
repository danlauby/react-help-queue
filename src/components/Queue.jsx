import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component {

  render() {
    return (
      <div>
        <TicketList/>
        <NewTicketControl/>
      </div>    
    )
  }
}

export default Queue;
