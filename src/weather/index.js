import React, { Component } from "react";
import axios from "axios";
import { Skycons } from "../helpers/skycons";

axios.defaults.baseURL = "http://0.0.0.0:3001/";
const Skycon = new Skycons();

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
  componentDidMount() {
    /* let latlng = this.props.latlng;
    this.getCurrentWeather(latlng); */
    Skycon.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
  }
  render() {
    return (
      <div className="m">
        <h1>Showing Weather for {this.props.address}</h1>
        <div>
          {this.state.current.summary}
          <canvas id="icon1" width="100" height="100" />
          {Skycon.play()}
        </div>
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
