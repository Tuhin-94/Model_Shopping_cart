import React, { Component } from "react";

import Navbar from "./Component/Navbar";

//import Counter from "./Component/Counter";
import Counts from "./Component/Counts";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0, name: "A" },
      { id: 2, value: 0, name: "B" },
      { id: 3, value: 0, name: "C" },
      { id: 4, value: 0, name: "D" }
    ]
  };

  handleDelete = CounterId => {
    //console.log("Item Delete", CounterId);
    const counters = this.state.Counters.filter(c => c.id !== CounterId);
    this.setState({ Counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.Counters[index].value);
    this.setState({ Counters: counters });
  };
  handleReset = () => {
    const Counters = this.state.Counters.map(c => (c.value = 10));
    this.setState({ Counters });
  };

  render() {
    return (
      <div className="divstyle">
        <Navbar
          counterNo={this.state.Counters.filter(c => c.value > 0).length}
        />
        <main>
          <Counts
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={this.state.Counters}
          />
        </main>
      </div>
    );
  }
}
export default App;
