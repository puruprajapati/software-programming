import React, { Component } from 'react';

export interface CounterModel {
  id: number;
  value: number;
}

type CounterProps = {
  onDelete: (id: number) => void;
  onIncrement: (counter: CounterModel) => void;
  onDecrement: (counter: CounterModel) => void;
  counter: CounterModel;
};

class Counter extends Component<CounterProps> {
  constructor(props: CounterProps) {
    super(props);
  }

  componentWillMount() {
    this.setState({ count: this.props.counter.value });
  }

  render() {
    this.getBadgeClasses();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button onClick={() => this.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
              +
            </button>
            <button
              onClick={() => this.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? true : false}
              className="btn btn-secondary btn-sm m-2"
            >
              -
            </button>
            <button onClick={() => this.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm btn-sm">
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  private getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  private onDelete = (id) => {
    this.props.onDelete(id);
  };

  private onIncrement = (counter: CounterModel) => {
    this.props.onIncrement(counter);
  };

  private onDecrement = (counter: CounterModel) => {
    this.props.onDecrement(counter);
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
