import React, { useState } from "react";
import { KEY_RETURN } from "keycode-js";

const InputBoxHooks = ({ value: initialValue, addNew }) => {
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyUp = (e) => {
        const text = value.trim();

        if (e.keyCode === KEY_RETURN && text) {
            addNew(text);
            setValue('');
        }
    };

    return (
        <input
            autoFocus
            type="text"
            className="form-control add-todo"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="Add New"
        />
    );
};

export default InputBoxHooks;