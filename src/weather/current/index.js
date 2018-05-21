import React, { Component } from "react";
import { Skycons } from "../../helpers/skycons";
const Skycon = new Skycons();

class Current extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.temp}
          {/* <canvas id="icon1" width="128" height="128" /> */}
          {Skycon.set(this.props.icon)}
        </h1>
        <h1>{this.props.summary}</h1>
      </div>
    );
  }
}

export default Current;
