import React, { PureComponent } from 'react';
import Header from '../../component/Header/Header.jsx';
import Button from '../../component/Button/Button.jsx';
import Footer from '../../component/Footer/Footer.jsx';
import './CheckPage.scss';

class CheckPage extends PureComponent {
  render() {
    return (
      <div className="check page">
        <Header />
        <Button label="check result" page="result" />
        <Footer />
      </div>
    );
  }
}

CheckPage.defaultProps = {};

CheckPage.propTypes = {};

export default CheckPage;
