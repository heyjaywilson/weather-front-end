import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleAddressChange(e) {
    this.props.handleAddressChange(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Weather Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.address}
            onChange={this.handleAddressChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
