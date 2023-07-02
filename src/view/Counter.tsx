import { Component } from "react";

interface Props {
  item: string;
  initial: number;
}

interface State {
  count: number;
}

export class Counter extends Component<Props, State> {
  state = {
    count: this.props.initial,
  };
 

  update_count = () => {
    const newState = this.state.count + 1;
    this.setState({ count: newState });
  };


  render() {
    return (
        <div className="hbox space-between mt20">
          <h3 className="paragraph">{this.props.item} counter: {this.state.count}</h3>
          <button className="button" onClick={this.update_count}>
            add a {this.props.item}
          </button>
        </div>
    );
  }
}
