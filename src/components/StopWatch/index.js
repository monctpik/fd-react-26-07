import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    // const { time } = this.state;
    // const newTime = new Date(time.getTime() + 1000);
    // this.setState({ time: newTime });
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    // this.start()
  }
  render() {
    const { count, time } = this.state;
    return (
      <article>
        <h2>{count}</h2>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.reset}>RESET</button>
      </article>
    );
  }
}

export default StopWatch;
