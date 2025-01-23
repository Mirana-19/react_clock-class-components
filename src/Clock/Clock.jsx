import { Component } from "react";

export class Clock extends Component {
  state = {
    today: new Date(),
  };

  timerId = null;

  componentDidMount() {
    this.timerId = setInterval(
      () => this.setState({ today: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    this.timerId = null;
    
  }

  componentDidUpdate(_, prevState) {
    if (prevState.today !== this.state.today) {
      console.log(formatTime(this.state.today));
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {" time is "}

        <span className="Clock__time">{formatTime(this.state.today)}</span>
      </div>
    );
  }
}

function formatTime(time) {
  return time.toUTCString().slice(-12, -4);
}
