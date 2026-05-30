import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          Find contact by name
          <br />
          <input type="text" name="filter" onChange={this.props.onChange} />
        </label>
      </>
    );
  }
}

export default Filter;