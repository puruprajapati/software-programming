import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  // arrow funciton inherits this
  handleIncrement = (value) => {
    this.setState({ count: this.state.count + value });
  };

  render() {
    this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ value: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  private getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;