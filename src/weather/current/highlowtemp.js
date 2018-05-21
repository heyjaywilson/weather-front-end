import React, { Component } from "react";

class HighLowTemp extends Component {
  render() {
    return (
      <div>
        <p>
          H:{" "}
          {this.props.data !== undefined
            ? this.props.data[0].apparentTemperatureHigh
            : ""}{" "}
          &#8457;
        </p>
        <p>
          L:{" "}
          {this.props.data !== undefined
            ? this.props.data[0].apparentTemperatureLow
            : ""}{" "}
          &#8457;
        </p>
      </div>
    );
  }
}

export default HighLowTemp;
