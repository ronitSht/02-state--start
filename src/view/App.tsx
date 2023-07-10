import { Component } from "react";
import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";
import { Counter } from "./Counter";

// interface State {
//   booksCount: number;
//   customersCount: number;
//   employeesCount: number;
// }

export function App() {
  const myName = "Yossi";
    return (
      <div className="app">
        <TopBar/>
        <h1>{myName}</h1>
        <h1 className="headline white-text">&lt;&lt;&lt;&lt; Stateful Bookstore &gt;&gt;&gt;&gt;</h1>
        <Counter item="books" initial={6}/>
        <Counter item="customer" initial={0}/>
        <Counter item="employee" initial={0}/>
        <br />
        <hr />
        <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
      </div>
    );
}

// export class App extends Component {
//   // state = {
//   //   //booksCount: 6,
//   //   customersCount: 0,
//   //   employeesCount: 0,
//   // };
//   myName = "Yossi";

//   // constructor(props:object) {
//   //   super(props);
//   //   this.myName = "Yariv";

//   //   this.state = {
//   //     //booksCount: 6,
//   //     customersCount: 0,
//   //     employeesCount: 0,
//   //   };

//     // this.add_book = this.add_book.bind(this);
//     // this.add_book = ()=> this.add_book();
//   //}

//   // addBook() {
//   //   // this.myName = "Johnny";
//   //   console.log("hello: ");
//   //   console.log("this: ", this);
//   //   //const newState = this.state.booksCount + 1;
//   //   //this.setState({ booksCount: newState });
//   //   // this.state = () => {
//   //   //   this.setState({ booksCount: newState });
//   //   // };
//   //   // this.state = {{ booksCount: this.state.booksCount++ }
//   // }

//   render() {
//     // console.log("this: ", this);
//     return (
//       <div className="app">
//         <TopBar/>
//         <h1>{this.myName}</h1>
//         <h1 className="headline white-text">&lt;&lt;&lt;&lt; Stateful Bookstore &gt;&gt;&gt;&gt;</h1>
//         <Counter item="books" initial={6}/>
//         <Counter item="customer" initial={0}/>
//         <Counter item="employee" initial={0}/>
//         <br />
//         <hr />
//         <UserInput
//           question="What is your name?"
//           placeholder="Your name here..."
//         />
//       </div>
//     );
//   }
// }
