import React, { Component } from "react";

class WeeklyForecast extends Component {
  convertDate(time) {
    let a = new Date(time * 1000);
    return a.toDateString();
  }
  render() {
    return (
      <div>
        <h1>{this.props.weekly.summary}</h1>

        <div className="details">
          {this.props.weekly.data.map((day, index) => {
            return (
              <div className="detail" key={index}>
                <h4>{this.convertDate(day.time)}</h4>
                <p>{day.summary}</p>
                <p>H: {day.apparentTemperatureHigh} &#8457;</p>
                <p>L: {day.apparentTemperatureLow} &#8457;</p>
                <p>Percip: {day.precipProbability} %</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeeklyForecast;
