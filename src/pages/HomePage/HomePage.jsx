import React, { Component } from 'react';
import Header from '../../component/Header/Header.jsx';
import Footer from '../../component/Footer/Footer.jsx';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home__content">
          <div className="home__input-wrapper">
            <span>Your name?</span>
            <input
              className="home__input-name"
              type="text"
              placeholder=""
              name="name"
              autoComplete="on"
              required
              // onBlur
            />
          </div>
          <div className="home__input-wrapper">
            <span>Your lastname?</span>
            <input
              className="home__input-lastname"
              type="text"
              placeholder=""
              name="lastname"
              autoComplete="on"
              required
              // onBlur
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.defaultProps = {};
HomePage.propTypes = {};

export default HomePage;
