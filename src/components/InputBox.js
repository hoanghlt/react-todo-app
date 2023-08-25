import React, {Component} from "react";
import KeyCode from "keycode-js";

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyUp(e) {
        const {addNew} = this.props;
        const text = this.state.value.trim();

            addNew(text);
            this.clear();
    }

    clear() {
        this.setState({value: ''});
    }

    render() {
        return (<input 
            type="text"
            className="form-control add-todo"
            value={this.state.value}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New"
        />);
    }
}

export default InputBox;