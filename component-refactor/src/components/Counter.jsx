import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      windowWidth: window.innerWidth
    };
  }

  // Effect 1: Syncing state with the document title
  // Effect 2: Setting up an event listener
  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <hr />
        <p>The window width is: **{this.state.windowWidth}px**</p>
      </div>
    );
  }
}

export default Counter;
