import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default Button;