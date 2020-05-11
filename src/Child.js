import React, { Component } from "react";
import { getRandomColor } from "./randomColorGenerator.js";

class Child extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.changeColor(getRandomColor())}
        className="child"
        style={{ backgroundColor: this.props.childrenColor }}
      ></div>
    );
  }
}

export default Child;
