import React from 'react';

class CounterComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value:10
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log("Constructor : Mounting Phase : Before Render");
  }

  componentDidMount(){
    console.log("componentDidMount : Mounting Phase : After Render");
  }
  
   componentDidUpdate(){
    console.log("componentDidUpdate : Updating Phase : After Render");
   }

  componentWillUnmount(){
    console.log("componentWillUnmount : Unmounting Phase")
  }

  handleIncrement(){
    this.setState({value : ++this.state.value})
  }
   
  handleDecrement=(event) => {
   this.setState({value: --this.state.value})
  }

  render(){
    console.log("render");
    const handleReset =() => {
      this.setState({value:10})
    }
    return(
      <>
      <h3>this is {this.props.componentName}</h3><br/>

      value:{this.state.value}<br/> <br/>

      <button onClick={this.handleIncrement}>Increment</button> &nbsp;

      <button onClick={this.handleDecrement}>Decrement</button> &nbsp;

      <button onClick ={handleReset}>reset</button>
      </>
    )
  }
}

export default CounterComponent;
