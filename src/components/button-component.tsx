import React from "react";

interface ChildProps {
    name: string;
    sayHello: () => void;
}

export class ButtonComponent extends React.Component<ChildProps> {
    name: string;
    constructor(props: any) {
        super(props)
        this.name = props.name;
    }

  componentWillUnmount() {
    console.log("🔴 componentWillUnmount: компонент будет удалён123");
  }

  sayHello = () => {
    this.props.sayHello()
  }

  render(): React.ReactNode {
      return (
        <button onClick={this.props.sayHello}>{this.name}</button>
      )
  }
  
}