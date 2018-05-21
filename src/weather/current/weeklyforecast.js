import React, { Component } from "react";

class WeeklyForecast extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.weekly.summary}</h1>
      </div>
    );
  }
}

export default WeeklyForecast;
