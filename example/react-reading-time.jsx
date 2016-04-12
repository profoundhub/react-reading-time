import React from 'react'
import ReactDOM from 'react-dom'

class ReactReadingTime extends React.component {
  render() {
    return (
      React.createElement('div', {className: 'container' }, 'Hello React!')
    );
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));