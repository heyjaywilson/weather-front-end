import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0:3001/";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      daily: ""
    };
  }

  getCurrentWeather(latlng) {
    axios
      .get("/api/currenttemp/" + latlng)
      .then(response => {
        console.log(response.data);
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
      console.log(response.data);
      this.setState({
        daily: response.data
      });
    });
  }
  /* componentDidMount() {
    let latlng = this.props.latlng;
    this.getCurrentWeather(latlng);
  } */
  render() {
    return (
      <div className="m">
        <h1>Showing Weather for {this.props.address}</h1>
        <div>{this.state.current.summary}</div>
        <button
          onClick={() => {
            this.getCurrentWeather(this.props.latlng);
          }}
        >
          Right Now
        </button>
        <button
          onClick={() => {
            this.getDailyWeather(this.props.latlng);
          }}
        >
          Daily Forecast
        </button>
      </div>
    );
  }
}

export default Weather;
