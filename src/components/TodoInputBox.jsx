import React, { useState } from "react";
import { uniqueId } from 'lodash'

const TodoInputBox = (props) => {
    const [state, setState] = useState("");
    return (
        <div className="">
            <input
                className="bg-gray-300 rounded min-w-full pl-2 pt-1 pb-1 pr-2"
                type="text"
                placeholder="Type todo here..."
                value={state}
                onChange={(event) => {
                    setState(event.target.value);
                }}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        props.handleEnter({ isDone: false, text: state, id: uniqueId() });
                        setState("");
                    }
                }}
            />
        </div>
    );
};

export default TodoInputBox;
