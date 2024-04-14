import React from 'react';
import classes from './textInput.module.css'

const PasswordInput = (props) => {
    return (
        <input type="password" className={[classes.textInput]} {...props} />
    );
};

export default PasswordInput;