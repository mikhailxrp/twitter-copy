import React from 'react';
import classes from './myButton.module.css'

const MyButtonFill = ({ children, ...props }) => {
    return (
        <button className={classes.btnFill} {...props}>
            {children}
        </button>
    );
};

export default MyButtonFill;