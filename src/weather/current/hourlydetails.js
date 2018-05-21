import React, { Component } from "react";

class HourlyDetails extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.hourly.summary}</h1>
      </div>
    );
  }
}

export default HourlyDetails;
