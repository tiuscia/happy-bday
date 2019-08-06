import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../../component/Header/Header.jsx';
import Footer from '../../component/Footer/Footer.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow-right.svg';
import './HomePage.scss';

class HomePage extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      redirect: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  goToCheck() {
    console.log('go to check... ...');
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 700);
  }

  render() {
    const { name, lastName, redirect } = this.state;
    if (redirect) {
      return <Redirect push to="/check" />;
    }
    return (
      <UserContext.Consumer>
        {({ setName, setLastName }) => (
          <div className="home page">
            <Header />
            <div className="home__content">
              <div className="home__form">
                <div className="home__input-wrapper home__input-wrapper--current">
                  <span>Your name?</span>
                  <input
                    className="home__input-name home__input-name--current"
                    type="text"
                    placeholder=""
                    name="name"
                    autoComplete="on"
                    onChange={this.handleNameChange}
                    // onBlur
                  />
                  <div
                    onClick={e => {
                      setName(name);
                    }}
                    className="home__arrow"
                  >
                    <ArrowRight />
                  </div>
                </div>
                <div className="home__input-wrapper">
                  <span>Your lastname?</span>
                  <input
                    className="home__input-lastname home__input-lastname--current"
                    type="text"
                    placeholder=""
                    name="lastname"
                    autoComplete="on"
                    onChange={this.handleLastNameChange}
                    // onBlur
                  />
                  <div
                    onClick={e => {
                      setLastName(lastName);
                      this.goToCheck();
                    }}
                    className="home__arrow"
                  >
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

HomePage.defaultProps = {};
HomePage.propTypes = {};

export default HomePage;
