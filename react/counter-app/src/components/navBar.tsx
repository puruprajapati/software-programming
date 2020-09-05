import React, { Component } from 'react';

type NavProps = {
  totalCounters: number;
};

class NabBar extends Component<NavProps> {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Total: {this.props.totalCounters}
        </a>
      </nav>
    );
  }
}

export default NabBar;
