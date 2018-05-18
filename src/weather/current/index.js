import React, { Component } from "react";

class Current extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.temp}</h1>
        <h1>{this.props.summary}</h1>
      </div>
    );
  }
}

export default Current;
