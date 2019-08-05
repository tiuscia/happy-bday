import React, { PureComponent } from 'react';
import Header from '../../component/Header/Header.jsx';
import Button from '../../component/Button/Button.jsx';
import { UserContext } from '../../context/UserContext.jsx';

class ResultPage extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {({ name, lastName }) => (
          <div className="result">
            <Header />
            <Button label="back home" />
            <span>{name}</span>
            <span>{lastName}</span>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

ResultPage.defaultProps = {};

ResultPage.propTypes = {};

export default ResultPage;
