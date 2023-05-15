import React from "react";

const FormInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label} </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        autocomplete="off"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
