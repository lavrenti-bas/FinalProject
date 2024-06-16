import React from "react";

export const Button = ({ onClick, children }) => {
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;
