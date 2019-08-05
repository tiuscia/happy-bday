import React from "react";
import { string, func } from "prop-types";
import "./Button.scss";

const Button = ({ label, action }) => {
  return (
    <button className="btn" type="button" onClick={action}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  action: null
};

Button.propTypes = {
  label: string.isRequired,
  action: func
};

export default Button;
