import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Sort onSort={ this.props.onSort } />
        <Search onSearch={ this.props.onSearch } />
      </div>
    )
  }
}
export default Control