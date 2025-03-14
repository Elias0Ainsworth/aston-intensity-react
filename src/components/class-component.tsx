import React from "react";
import { ButtonComponent } from "./button-component";

interface CounterState {
    count: number;
    inputDate: number;
    isLoad: boolean;
}
interface CounterProps {}

export class ClassComponent extends React.Component<{}, CounterState> {
    constructor(props: any) {
        super(props);
        this.state = { count: 0, inputDate: 0, isLoad: true };
    }

  componentDidMount() {
    console.log("🟢 componentDidMount: компонент примонтирован в DOM");
  }

//   componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
//     console.log("🔄 componentDidUpdate: компонент обновился");
//     console.log("Предыдущее состояние:", prevState.count);
//     console.log("Текущее состояние:", this.state.count);
//   }

  componentWillUnmount() {
    console.log("🔴 componentWillUnmount: компонент будет удалён");
  }
  
    increment = () => {
        this.setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
      };

    decrement = () => {
        this.setState((prevState) => ({ ...prevState, count: prevState.count - 1 }));
      };

    summ = () => {
        this.setState((prevState) => ({ ...prevState, count: prevState.count + prevState.inputDate, isLoad: prevState.isLoad? false : true}))
    }

    sayHello = () => {
      this.setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
    }

    render() {
        return (
            <div>
                <h2>Счётчик: {this.state.count}</h2>
                <input type="number" onChange={(e) => this.setState((prevState) => ({ ...prevState, inputDate: Number(e.target.value) })) }/>
                <button onClick={this.increment}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
                <button onClick={this.summ}>Summ!</button>

                {this.state.isLoad && <ButtonComponent name="Loading" sayHello={this.sayHello}/>}
            </div>
        )
    }
}