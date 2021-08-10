import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      numberOfGuests: "",
      isGoing: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  }
  handleSubmit(event) {
    alert("提交的名字: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default NameForm;
