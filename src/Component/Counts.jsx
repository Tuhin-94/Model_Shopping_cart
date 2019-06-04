import React, { Component } from "react";
//import reactDom from "react-dom";
import Counter from "./Counter";

class Counts extends Component {
  render() {
    const { onReset, onDelete, counter, onIncrement } = this.props;

    return (
      <div>
        <button className="button1" onClick={onReset}>
          Reset
        </button>
        {this.props.counter.map(CounterElement => (
          <Counter
            key={CounterElement.id}
            ondelete={this.props.onDelete}
            counter={CounterElement}
            onincrement={this.props.onIncrement}
          >
            <h5 className="Texth2">Counter Name : {CounterElement.name}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counts;
