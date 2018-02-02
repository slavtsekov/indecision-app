import React from "react";

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
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