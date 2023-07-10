import { Component, useState } from "react";

interface Props {
  item: string;
  initial: number;
}

interface State {
  count: number;
}

export function Counter(props: Props) {
  const [count, setCount] = useState(props.initial);

  const update_count = () => {
    const newState = count + 1;
    setCount(newState);
  };

    return (
        <div className="hbox space-between mt20">
          <h3 className="paragraph">{props.item} counter: {count}</h3>
          <button className="button" onClick={update_count}>
            add a {props.item}
          </button>
        </div>
    );
}

// export class Counter extends Component<Props, State> {
//   state = {
//     count: this.props.initial,
//   };
 

//   update_count = () => {
//     const newState = this.state.count + 1;
//     this.setState({ count: newState });
//   };


//   render() {
//     return (
//         <div className="hbox space-between mt20">
//           <h3 className="paragraph">{this.props.item} counter: {this.state.count}</h3>
//           <button className="button" onClick={this.update_count}>
//             add a {this.props.item}
//           </button>
//         </div>
//     );
//   }
// }
