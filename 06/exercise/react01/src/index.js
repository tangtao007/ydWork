class HelloMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title
    };
  }
  render(){
    return (
      <div>
        <h1 onClick={this.handle} className="h1">{this.props.title}</h1>
        <h2>{this.state.title}</h2>
      </div>
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
  <HelloMessage></HelloMessage>,
  document.getElementById('root')
);