import React, { Component } from "react";

class MoreDetails extends Component {
  render() {
    return (
      <div className="details">
        <p>Wind Speed: {this.props.current.windSpeed}mph</p>
        <p>
          Percipitation Probability: {this.props.current.precipProbability}%
        </p>
        <p>Visibility: {this.props.current.visibility}mi</p>
      </div>
    );
  }
}

export default MoreDetails;
