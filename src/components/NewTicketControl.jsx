import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(e) {
    console.log("New Ticket Button was Clicked!");
    this.setState({formVisibleOnPage: true});
  }

  render() {
    return (
      <button onClick={this.handleDisplayingNewTicketForm}>Request Help</button>
    );
  }

}

export default NewTicketControl;
