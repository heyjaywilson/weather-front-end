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
        <form onSubmit={this.handleSubmit}>
          <label>Location </label>
          <input
            type="text"
            value={this.props.address}
            onChange={this.handleAddressChange}
            placeholder="809 6th st blanco, tx"
          />
        </form>
      </div>
    );
  }
}

export default Search;
