import React, { Component } from "react";
//import geocoder from "geocoder";
import Geocode from "./helpers/geocode";
import Search from "./search";
import Weather from "./weather";

Geocode.setApiKey(process.env.GOOGLE_API);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "809 6th St, Blanco, TX 78606, USA",
      lat_lng: "30.100761,-98.4244279",
      formatted: "809 6th St, Blanco, TX 78606, USA"
    };
    this.onAddressChange = this.onAddressChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  onAddressChange(add) {
    this.setState({
      address: add
    });
    console.log(this.state);
  }

  getWeather() {
    Geocode.fromAddress(this.state.address).then(response => {
      this.setState({
        lat_lng:
          response.results[0].geometry.location.lat +
          "," +
          response.results[0].geometry.location.lng,
        formatted: response.results[0].formatted_address
      });
    });
    /* geocoder.geocode(
      this.state.address,
      (error, data) => {
        console.log(data.results);
        // let string = data.results[0].geometry.location.lat;
        this.setState({
          lat_lng:
            data.results[0].geometry.location.lat +
            "," +
            data.results[0].geometry.location.lng,
          formatted: data.results[0].formatted_address
        });
      },
      { key: process.env.GOOGLE_API }
    ); */
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <div className="App">
        <div className="s">
          <Search
            address={this.state.address}
            handleAddressChange={this.onAddressChange}
          />
          <button
            className="bttn-small"
            onClick={() => {
              this.getWeather();
            }}
            disabled={this.state.address === ""}
          >
            Get weather
          </button>
        </div>
        <Weather address={this.state.formatted} latlng={this.state.lat_lng} />
        <footer className="f">
          <a
            href="https://darksky.net/poweredby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            powered by darksky.net
          </a>

          <span>
            designed and developed by{" "}
            <a
              href="https://maeganwilson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              maegan wilson
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
