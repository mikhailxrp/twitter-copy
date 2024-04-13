import React from 'react';
import classes from './textarea.module.css'

const TextArea = (props) => {
    return (
        <textarea className={classes.decription} {...props} />
    );
};

export default TextArea;