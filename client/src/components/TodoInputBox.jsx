import React, { useState } from "react";
import { nanoid } from 'nanoid'

const TodoInputBox = (props) => {
    const [state, setState] = useState("");
    return (
        <div className="text-gray-700">
            <input
                className="focus:outline-none focus:border-purple-900 bg-gray-100 rounded min-w-full pl-2 pt-1 pb-1 pr-2"
                type="text"
                placeholder="Type todo here..."
                value={state}
                onChange={(event) => {
                    setState(event.target.value);
                }}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        props.handleEnter({ isDone: false, text: state, id: nanoid() });
                        setState("");
                    }
                }}
            />
        </div>
    );
};

export default TodoInputBox;
