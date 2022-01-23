
import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({input,meta, ...props}) => {
    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
            <textarea {...props.input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>"some_error"</span> }
        </div>
    )
}