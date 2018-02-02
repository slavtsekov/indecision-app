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
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {selectedOption && <p className="modal__body">{selectedOption}</p>}
            <button className="button" onClick={clearOption}>OK</button>
        </Modal>
    );
};

export { OptionModal as default };