import React from "react";
import InputBoxHooks from "../hoc/wrapInputBox";

class ParentComponent extends React.Component {
    // Define your 'addNew' function here
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* ... */}
                <InputBoxHooks addNew={this.addNew} />
                {/* ... */}
            </div>
        );
    }
}

export default ParentComponent;