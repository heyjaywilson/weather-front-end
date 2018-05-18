import React, { Component } from "react";
import geocoder from "geocoder";
import Search from "./search";
import Weather from "./weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      lat_lng: "30.100761,-98.4244279",
      formatted: "809 6th St, Blanco, TX 78606, USA"
    };
    this.onAddressChange = this.onAddressChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  onAddressChange(add) {
    this.setState({
      address: add
    });
  }

  getLocation() {
    geocoder.geocode(this.state.address, (error, data) => {
      console.log(data.results[0].geometry);
      this.setState({
        lat_lng:
          data.results[0].geometry.location.lat +
          "," +
          data.results[0].geometry.location.lng,
        formatted: data.results[0].formatted_address
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <Search
          address={this.state.address}
          handleAddressChange={this.onAddressChange}
        />
        <button onClick={this.getLocation} disabled={this.state.address === ""}>
          Get Long
        </button>
        <Weather address={this.state.formatted} latlng={this.state.lat_lng} />
      </div>
    );
  }
}

export default App;