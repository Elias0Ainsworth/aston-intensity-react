import React, { createRef, RefObject } from "react";
import { ListComponent } from "./list-component";

interface CounterState {
    inputDate: string;
    isLoad: boolean;
}
export class ClassComponent extends React.Component<{}, CounterState> {
    private inputRef: RefObject<HTMLInputElement | null>
    constructor(props: any) {
        super(props);
        this.state = { inputDate: '', isLoad: true };
        this.inputRef = createRef<HTMLInputElement>();
    }

    changeFocus = () => this.inputRef.current?.focus();

    render() {
        return (
            <>
                <input ref={this.inputRef} type="text" onChange={(e) => this.setState((prevState) => ({ ...prevState, inputDate: e.target.value })) }/>
                <button disabled={this.state.inputDate === "React" ? true : false}>POST</button>
                <h2>{this.state.inputDate === "React" ? "Вы не можете продолжать" : "Вы можете продолжать"}</h2>
                <button onClick={this.changeFocus}>Focus input</button>
                <ListComponent />
            </>
        )
    }
}