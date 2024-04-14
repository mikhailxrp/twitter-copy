import React from 'react';
import classes from './textInput.module.css'

const EmailInput = (props) => {
    return (
        <input type="email" className={[classes.textInput]} {...props} />
    );
};

export default EmailInput;