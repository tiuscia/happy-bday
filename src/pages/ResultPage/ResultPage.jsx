import React, { PureComponent } from 'react';
import Header from '../../component/Header/Header.jsx';
import Button from '../../component/Button/Button.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import './ResulPage.scss';

class ResultPage extends PureComponent {
  resultMsg = (name, lastName) => {
    const random = Math.round(Math.random());
    if (name === 'lauren' && lastName === 'lewis') {
      return <span>Babe, I love you!</span>;
    }

    if (random) {
      return <span>hai perso</span>;
    }

    return <span>hai vinto</span>;
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ name, lastName }) => (
          <div className="result page">
            <Header />
            <div className="result__content">
              <div className="result__msg">
                <span>
                  Hi {name} {lastName},
                </span>
                <br />
                <span>{this.resultMsg(name, lastName)}</span>
              </div>
              <Button label="back home" />
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

ResultPage.defaultProps = {};

ResultPage.propTypes = {};

export default ResultPage;
