var HelloRedux = React.createClass({displayName: "HelloRedux",
  render: function(){
    return React.createElement("h1", null, this.props.name)
  }
});

ReactDOM.render(
  React.createElement("div", null, React.createElement(HelloRedux, {name: "John"})),
  document.getElementById("root")
);