import React, { Component } from "react";

class MoreDetails extends Component {
  render() {
    return (
      <ul>
        <li>Wind Speed: {this.props.current.windSpeed}mph</li>
        <li>
          Percipitation Probability: {this.props.current.precipProbability}%
        </li>
        <li>Visibility: {this.props.current.visibility}mi</li>
      </ul>
    );
  }
}

export default MoreDetails;
