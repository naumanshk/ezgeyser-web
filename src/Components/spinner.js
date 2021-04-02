import React, { Component } from 'react';

class InputNumber extends React.Component {
    state = {
      value: 15,
      convertedVal:0
    }
  
    constructor() {
      super();
      
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    get value() {
      return this.state.value;
    }

    conversion(){
      var value=this.state.value
      var hours
      if(value>=60){
        hours=value/60
        console.log(hours)
      }
      this.setState({convertedVal:hours})
    }
  
    increment() {
      const { max } = this.props;
      
      if (typeof max === 'number' && this.value >= max) return;
      
      
      this.setState({ value: this.value + 15 },()=>this.conversion());
    }
  
    decrement() {
      const { min } = 15;
      
    //   if (min === 15 && this.value <= min) return;

      if(this.state.value >= 15){
      this.setState({ value: this.value - 15 },()=>this.conversion());

      }
      

    }
    
    render() {
      return (
        <div className="input-number" style={this.props.style}>
          <button type="button" onClick={this.decrement}>&minus;</button>
          <span>{this.value>=60 ? `${this.state.convertedVal}h` : `${this.value}m`}</span>
          <button type="button" onClick={this.increment}>&#43;</button>     
        </div>
      )
    }
  }

export default InputNumber;
