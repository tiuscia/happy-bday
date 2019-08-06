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
      redirect: false,
      showNextInput: false,
      showNextPage: false,
      error: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value, error: false });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value, error: false });
  }

  goToCheck() {
    const { lastName } = this.state;
    if (lastName) {
      this.setState({ showNextPage: true });
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 750);
    } else {
      this.setState({ error: true });
    }
  }

  goNextInput() {
    const { name } = this.state;
    if (name) {
      this.setState({ showNextInput: true });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      name,
      lastName,
      redirect,
      showNextInput,
      showNextPage,
      error
    } = this.state;
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
                <div
                  className={`home__input-wrapper ${
                    !showNextInput ? 'home__input-wrapper--current' : ''
                  }`}
                >
                  <span
                    className={`home__label ${
                      showNextInput ? 'home__label--hide' : ''
                    }`}
                  >
                    Your name?
                  </span>
                  <input
                    className="home__input-name home__input-name--current"
                    type="text"
                    placeholder=""
                    name="name"
                    autoComplete="on"
                    onChange={this.handleNameChange}
                  />
                  <div
                    onClick={e => {
                      setName(name);
                      this.goNextInput();
                    }}
                    className="home__arrow"
                  >
                    <ArrowRight />
                  </div>
                </div>
                <div
                  className={`home__input-wrapper ${
                    showNextInput ? 'home__input-wrapper--current' : ''
                  }`}
                >
                  <span>Your lastname?</span>
                  <input
                    className="home__input-lastname home__input-lastname--current"
                    type="text"
                    placeholder=""
                    name="lastname"
                    autoComplete="on"
                    onChange={this.handleLastNameChange}
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
                <div className="home__controls">
                  <div
                    className={`home__progress ${
                      showNextInput ? 'home__progress--half' : ''
                    } ${showNextPage ? 'home__progress--full' : ''}`}
                  />
                  {error && (
                    <span className="home__error">
                      Please fill the field before continuing
                    </span>
                  )}
                  <span className="home__fraction">
                    {showNextInput ? '2' : '1'}
                    <span className="home__divide">&nbsp;&nbsp;/&nbsp;</span> 2
                  </span>
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
