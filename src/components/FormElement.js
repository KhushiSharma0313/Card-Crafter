import React from 'react'

const formElement = ({ID, Label, Value}) => {
  return (
    <label>
        <strong>{Label}</strong>
        <input type = "text" name={ID} Value={Value} />
    </label>
  )
}

export default formElement
