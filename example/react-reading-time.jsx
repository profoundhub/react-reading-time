import React from "react";
import ReactDOM from "react-dom";
import ReadingTime from "../src/reading-time"

class ReactReadingTime extends React.component {
  render() {
    return (
      React.createElement("div", {className: "container"}, "Hello React!")
    );
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById("React"));