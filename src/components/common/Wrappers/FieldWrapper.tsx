import React from 'react';

type ErrorMessage = {
  message: string
}

type PropsType = {
  label: string
  error: ErrorMessage | undefined
  touched: boolean
  children: typeof React.Component
}

const FieldWrapper: React.FC<PropsType> = (
  {
    children,
    label,
    error,
    touched,
  }): JSX.Element => {
  return (
    <div>
      {label && <label style={{fontWeight: 'bold'}}>{`${label}:`}</label>}
      {children}
      {error && touched &&
        <p style={{margin: '5px 0', color: 'red'}}>
          {error.message ? error.message : 'Error text'}
        </p>
      }
    </div>
  )
}

export default FieldWrapper;