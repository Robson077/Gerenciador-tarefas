import "./CustomButton.scss"

import React from 'react'

const CustomButton = ({ onClick, children }) => {

    return (
        <div className="custom-button-container" onClick={onClick}>
            {children}
        </div>
    )
}

export default CustomButton