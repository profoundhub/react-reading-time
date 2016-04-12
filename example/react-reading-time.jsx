import React from "react";
import ReactDOM from "react-dom";
import ReadingTime from "../src/reading-time"

class ReactReadingTime extends React.Component {
  render() {
    return (
      React.createElement("div", {className: "container"}, "Hello React, wow are you?!")
    );
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById("React"));