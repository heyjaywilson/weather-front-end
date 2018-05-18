import React, { Component } from "react";
import axios from "axios";
// import { Skycons } from "../helpers/skycons";
import Current from "./current";
import HighLowTemp from "./current/highlowtemp";

axios.defaults.baseURL = "http://0.0.0.0:3001/";
// const Skycon = new Skycons();

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      daily: "",
      icon: ""
    };
  }

  getCurrentWeather(latlng) {
    axios
      .get("/api/currenttemp/" + latlng)
      .then(response => {
        this.setState({
          current: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDailyWeather(latlng) {
    axios.get("api/daily/" + latlng).then(response => {
      this.setState({
        daily: response.data
      });
    });
  }
  componentDidMount() {
    let latlng = this.props.latlng;
    this.getCurrentWeather(latlng);
    this.getDailyWeather(latlng);
  }
  render() {
    return (
      <div className="m weather">
        <div className="w">
          <Current
            temp={this.state.current.apparentTemperature}
            summary={this.state.current.summary}
          />
          <div className="bttn-group">
            <button className="bttn-lrg">SHOW MORE DETAILS</button>
            <button className="bttn-lrg">SHOW HOURLY FORECAST</button>
            <button className="bttn-lrg">SHOW WEEKLY FORECAST</button>
          </div>
        </div>
        <div className="a">
          <div>{this.props.address}</div>
          <HighLowTemp data={this.state.daily.data} />
        </div>
      </div>
    );
  }
}

export default Weather;
