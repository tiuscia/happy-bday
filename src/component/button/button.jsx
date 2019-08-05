import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ label, page }) => {
  return (
    <div className="btn">
      <Link to={`/${page}`}>{label}</Link>
    </div>
  );
};

Button.defaultProps = {
  page: ''
};

Button.propTypes = {
  label: string.isRequired,
  page: string
};

export default Button;
