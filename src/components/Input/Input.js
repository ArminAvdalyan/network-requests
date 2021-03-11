import React from "react";
import Proptypes from "prop-types";

import "./Input.scss";

const Input = ({
  type = "text",
  value,
  onChange,
  className = "",
  loading = false,
  placeholder = ""
}) => {
  
  return (
    <input 
      type={type}
      value={value}
      onChange={onChange}
      className={`app-input ${className}`}
      disabled={loading}
      placeholder={placeholder}
    />
  )
}

Input.prototypes = {
  type: Proptypes.string,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  className: Proptypes.string,
  loading: Proptypes.bool,
  placeholder: Proptypes.string

} 

export default Input;