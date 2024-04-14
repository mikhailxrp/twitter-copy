import React from 'react';
import classes from './modal.module.css'

const ModalSucsses = ({ children, closeModal }) => {
    return (
        <div className={classes.modalSucsses}>
            <button className={classes.btnClose} onClick={closeModal} ></button>
            <h2 className={classes.modalTitle} >{children}</h2>
        </div>
    );
};

export default ModalSucsses;