import React, { Component } from "react";

class HourlyDetails extends Component {
  convertDate(time) {
    let a = new Date(time * 1000);
    return a.getHours();
  }

  render() {
    return (
      <div>
        <h1>{this.props.hourly.summary}</h1>
        <div className="details hourly-temps">
          {this.props.hourly.data.map((hour, index) => {
            return (
              <div className="detail" key={index}>
                <h4>
                  {this.convertDate(hour.time)}:00 || {hour.summary}
                </h4>
                <p>Temp: {hour.apparentTemperature} &#8457;</p>
                <p>Percip : {hour.precipProbability} %</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HourlyDetails;
