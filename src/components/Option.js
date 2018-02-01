import React from "react";

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className="button--link" 
            onClick={(е) => { 
                props.handleDeleteOption(props.optionText); 
            }}
        >
            Remove
        </button>
    </div>
);

export { Option as default };