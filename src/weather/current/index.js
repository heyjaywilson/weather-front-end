import React, { Component } from "react";
import { Skycons } from "../../helpers/skycons";
const Skycon = new Skycons({ color: "white" });

class Current extends Component {
  tempStyles() {
    return {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "5em",
      margin: "0",
      verticalAlign: "middle"
    };
  }
  render() {
    return (
      <div>
        <h1 style={this.tempStyles()}>
          {this.props.temp} &#8457;
          <canvas id="icon1" width="100" height="100" />
          {Skycon.set("icon1", this.props.icon)}
          {Skycon.play()}
        </h1>
        <h1>It is {this.props.summary}.</h1>
      </div>
    );
  }
}

export default Current;
