import { Component } from 'react';

class Toggle extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    });
  }

  render() {
    return (
      <div>
        <p>The status is: {this.state.toggle ? 'ON' : 'OFF'}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export default Toggle;