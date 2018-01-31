import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
    const selectedOption = props.selectedOption;
    const clearOption = props.handleClearSelectedOption;
    
    return (
        <Modal
            isOpen={!!selectedOption}
            onRequestClose={clearOption}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {selectedOption && <p>{selectedOption}</p>}
            <button onClick={clearOption}>OK</button>
        </Modal>
    );
};

export { OptionModal as default };