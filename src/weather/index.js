import React, { Component } from "react";
import axios from "axios";
import Current from "./current";
import HighLowTemp from "./current/highlowtemp";
import MoreDetails from "./current/moredetails";
import HourlyDetails from "./hourly";
import WeeklyForecast from "./weekly";

axios.defaults.baseURL = "https://ds-weather-mw.herokuapp.com/";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      current: "",
      hourly: "",
      weekly: "",
      show: 0
    };
    this.show = this.show.bind(this);
  }
  getWeather(latlng) {
    axios
      .get("/api/" + latlng)
      .then(response => {
        this.setState({
          data: response.data,
          current: response.data.currently,
          hourly: response.data.hourly,
          weekly: response.data.daily
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    //this.setCurrent();
    console.log(this.state);
  }

  /* componentWillMount() {
    this.getWeather(this.props.latlng);
  } */

  show(num) {
    if (num === this.state.show) {
      this.setState({ show: 0 });
    } else this.setState({ show: num });
  }

  componentWillReceiveProps(nextProps) {
    this.getWeather(this.props.latlng);
  }

  render() {
    return (
      <div className="m weather">
        <div className="w">
          <Current
            temp={this.state.current.apparentTemperature}
            summary={this.state.current.summary}
            icon={this.state.current.icon}
          />
          <div className="bttn-group">
            <button className="bttn-lrg" onClick={() => this.show(1)}>
              SHOW MORE DETAILS
            </button>
            {this.state.show === 1 ? (
              <MoreDetails current={this.state.current} />
            ) : (
              <span />
            )}
            <button className="bttn-lrg" onClick={() => this.show(2)}>
              SHOW HOURLY FORECAST
            </button>
            {this.state.show === 2 ? (
              <HourlyDetails hourly={this.state.hourly} />
            ) : (
              <span />
            )}
            <button className="bttn-lrg" onClick={() => this.show(3)}>
              SHOW WEEKLY FORECAST
            </button>
            {this.state.show === 3 ? (
              <WeeklyForecast weekly={this.state.weekly} />
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className="a">
          <div>{this.props.address}</div>
          <HighLowTemp data={this.state.weekly.data} />
        </div>
      </div>
    );
  }
}

export default Weather;
