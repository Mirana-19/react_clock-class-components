import { Component } from "react";

export class Clock extends Component {
  state = {
    today: new Date(),
  };

  formatDate(date) {
    return date.toUTCString().slice(-12, -4);
  }

  timerId = null;

  componentDidMount() {
    this.timerId = setInterval(
      () => this.setState({ today: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.clockName !== this.props.clockName) {
      console.log(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`
      );
    }

    if (prevState.today !== this.state.today) {
      console.log(this.formatDate(this.state.today));
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {" time is "}

        <span className="Clock__time">{this.formatDate(this.state.today)}</span>
      </div>
    );
  }
}

export default Clock;
