import React from 'react';
import classes from './textInput.module.css'

const TextInput = (props) => {
    return (
        <input className={[classes.textInput]} {...props} type="text" />
    );
};

export default TextInput;