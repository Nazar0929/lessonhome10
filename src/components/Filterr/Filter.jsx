import { Component } from "react";
import style from "./Filter.module.css"

class Filter extends Component {
  render() {
    return (
      <>
        <label className={style.label}>
          Find contact by name
          <br />
          <input type="text" name="filter"  onChange={this.props.onChange} className={style.input} />
        </label>
      </>
    );
  }
}

export default Filter;