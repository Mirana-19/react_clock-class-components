import { Component } from "react";
import "./App.css";
import { Clock } from "./Clock/Clock";

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    clockName: "Clock-0",
    hasClock: true,
  };

  timerId = null;

  setTimer() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (e) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.setTimer();

    document.addEventListener("contextmenu", this.hideClock);

    document.addEventListener("click", this.showClock);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener("click", this.showClock);
    document.removeEventListener("contextmenu", this.hideClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
