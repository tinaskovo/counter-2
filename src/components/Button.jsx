import React, { Component } from 'react';

class Button extends Component {
  render () {
    return ( <button onClick={this.props.onPress}>{this.props.label}</button>
    );
  }
}

export default Button;
