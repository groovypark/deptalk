import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <form>
      <label for={props.inputName}>{props.inputName}</label>
      <input className="form__input" type={props.inputType} id={props.inputName} minlength="1" maxlength="8" required />
    </form>
  );
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired
}

export default Input;
