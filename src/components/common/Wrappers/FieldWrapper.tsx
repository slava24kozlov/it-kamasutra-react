import React from "react";
import {FieldError} from "react-hook-form";

type PropsType = {
    inputId: string
    label: string
    error: FieldError | undefined
    touched: boolean | undefined
    children: React.ReactNode
}

const FieldWrapper: React.FC<PropsType> = (
    {
        inputId,
        children,
        label,
        error,
        touched,
    }): JSX.Element => {
    return (
        <div>
            {label && <label htmlFor={inputId} aria-label={label} aria-labelledby={inputId}
                             style={{fontWeight: "bold"}}>{`${label}:`}</label>}
            {children}
            {error && touched &&
                <p style={{margin: "5px 0", color: "red"}}>
                    {error.message ? error.message : "Error text"}
                </p>
            }
        </div>
    );
};

export default FieldWrapper;
