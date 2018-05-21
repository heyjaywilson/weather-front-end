import React, { Component } from "react";

class MoreDetails extends Component {
  render() {
    return (
      <ul>
        <li>Wind Speed: {this.props.current.windSpeed}</li>
      </ul>
    );
  }
}

export default MoreDetails;
