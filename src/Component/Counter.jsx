import React, { Component } from "react";
//import ReactDOM from "react-dom";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   id: this.props.counter.id,
  //   name: this.props.counter.name
  // };

  // incrementCount = () => {
  //   //this.state.count++ ;
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  //   // return this.state.count;
  // };
  /*  deleteItem = () => {
    this.setState({
      count: this.state.count - 1
    });
  }; */

  render() {
    return (
      <div>
        {this.props.children}
        <button
          className="button2"
          onClick={() => this.props.onincrement(this.props.counter)}
        >
          Add
        </button>
        {/* <button onClick={this.props}>Add</button> */}
        <button
          className="button2"
          onClick={() => this.props.ondelete(this.props.counter.id)}
        >
          Delete
        </button>
        <p className="textp">The value of count is {this.formatCount()}</p>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
