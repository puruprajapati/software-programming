import React, { Component } from 'react';
import Counter, { CounterModel } from './counter';

type CountersProps = {
  onReset: () => void;
  onDelete: (id: number) => void;
  onIncrement: (counter: CounterModel) => void;
  onDecrement: (counter: CounterModel) => void;
  counters: CounterModel[];
};

class Counters extends Component<CountersProps> {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
