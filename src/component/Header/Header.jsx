import React from 'react';
import { ReactComponent as Cheers } from '../../assets/img/cheers.svg';
import './Header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header__logo">
          <Cheers />
        </div>
        <span className="header__txt">
          Someone's Bday - shottino o vino?
          <span className="header__apex">*</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Header;
