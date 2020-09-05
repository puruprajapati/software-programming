import React, { Component } from 'react';

interface Props {
  liked: boolean;
  onClick: () => void;
}

class Like extends Component<Props> {
  state = {};
  render() {
    let classes = 'fa fa-heart';
    if (!this.props.liked) classes += '-o';
    return <i onClick={this.props.onClick} style={{ cursor: 'pointer' }} className={classes} aria-hidden="true"></i>;
  }
}

export default Like;
