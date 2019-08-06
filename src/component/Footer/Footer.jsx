import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <span>
          <span className="footer__apex">*</span>Concorso valido fino a
          esaurimento budget
        </span>
      </div>
    </React.Fragment>
  );
};

export default Footer;
