import React, {useState} from 'react';

const Counter = () => {
  const [ count, setCount ] = useState(0);
  const [ windowWidth, setWindowWidth ] = useState(0)

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // Effect 1: Syncing state with the document title
  // Effect 2: Setting up an event listener
  // componentDidMount() {
  //   document.title = `Count: ${this.state.count}`;
  //   window.addEventListener('resize', this.handleResize);
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.count !== this.state.count) {
  //     document.title = `Count: ${this.state.count}`;
  //   }
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize);
  // }

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Count: {count}</h1>
        <button onClick={() => handleIncrement()}>Increment</button>
        <hr />
        <p>The window width is: **{this.state.windowWidth}px**</p>
      </div>
    );
  }
}

export default Counter;
