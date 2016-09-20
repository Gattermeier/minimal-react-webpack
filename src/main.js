import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <App name="World" />,
  document.getElementById('main')
);
