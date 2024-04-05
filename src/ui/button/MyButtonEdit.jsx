import React from 'react';
import classes from './myBUtton.module.css'

const MyButton = ({ children, ...props }) => {
    return (
        <button className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;