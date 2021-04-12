import React from 'react';

const Validation = (props) => {

    let textLength = null;

    if(props.textLength <= 5) {
        textLength = <p>Text too short</p>;
    } else {
        textLength = <p>Text long enough</p>;
    }

    return (
        <div className="Validation">
            {textLength}
        </div>
    );
};

export default Validation;