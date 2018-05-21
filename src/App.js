import React, { Component } from "react";
import geocoder from "geocoder";
import Search from "./search";
import Weather from "./weather";

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
    geocoder.geocode(this.state.address, (error, data) => {
      console.log(data.results);
      // let string = data.results[0].geometry.location.lat;
      this.setState({
        lat_lng:
          data.results[0].geometry.location.lat +
          "," +
          data.results[0].geometry.location.lng,
        formatted: data.results[0].formatted_address
      });
    });
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
            Powered by Darksky.net
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
