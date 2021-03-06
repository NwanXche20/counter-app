import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete, onDecrease } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-sm badge-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
