import React from 'react';

const FieldWrapper = (
  {
    children,
    label,
    error,
    touched,
  }) => {

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