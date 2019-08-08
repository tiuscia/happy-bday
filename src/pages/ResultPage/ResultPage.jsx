import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import Header from '../../component/Header/Header.jsx';
import Button from '../../component/Button/Button.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import './ResulPage.scss';

class ResultPage extends PureComponent {
  resultMsg = (name, lastName) => {
    const random = Math.round(Math.random());
    if (name.toLowerCase() === 'lauren' && lastName.toLowerCase() === 'lewis') {
      return (
        <React.Fragment>
          <div className="result__big">you win</div>
          <span>Amore mio you always win</span>
          <br />
          <span>and not only a drink ;) ily</span>
        </React.Fragment>
      );
    }

    if (random) {
      return (
        <React.Fragment>
          <div className="result__big">try again</div>
          <span>
            Hi{' '}
            <span className="result__user-data">
              {name} {lastName}
            </span>
          </span>
          <br />
          <span>I'm sorry, you didn't win anything :/ </span>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="result__big">you won</div>
        <span>
          Hi{' '}
          <span className="result__user-data">
            {name} {lastName}
          </span>
        </span>
        <br />
        <span>look for me and let me offer you a drink!</span>
      </React.Fragment>
    );
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ name, lastName }) => {
          console.log(name, lastName);
          return name === undefined && lastName === undefined ? (
            // if we have no data, we redirect to homepage
            <Redirect push to="/" />
          ) : (
            <div className="result page">
              <Header />
              <div className="result__content">
                <div className="result__msg">
                  {this.resultMsg(name, lastName)}
                </div>
                <Button label="back home" />
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

ResultPage.defaultProps = {};

ResultPage.propTypes = {};

export default ResultPage;
