class HelloMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title
    };
  }
  render(){
    return (
      React.createElement("div", null, 
        React.createElement("h1", {onClick: this.handle, className: "h1"}, this.props.title), 
        React.createElement("h2", null, this.state.title)
      )
    );
  }
}
HelloMessage.propTypes = {
  title:React.PropTypes.string
}
HelloMessage.defaultProps = {
  title:'133'
}
ReactDOM.render(
  React.createElement(HelloMessage, null),
  document.getElementById('example')
);