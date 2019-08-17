import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { withCookies, Cookies } from 'react-cookie';
import moment from 'moment';
import Header from '../../component/Header/Header.jsx';
import Button from '../../component/Button/Button.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import './ResulPage.scss';

class ResultPage extends PureComponent {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      wins: cookies.get('wins') || 0
    };
  }

  resultMsg = (name, lastName) => {
    const { wins } = this.state;
    // read cookie
    console.log('get cookie', wins);

    const random = Math.round(Math.random());
    if (name.toLowerCase() === 'lauren' && lastName.toLowerCase() === 'lewis') {
      return (
        <React.Fragment>
          <div className="result__big">you win</div>
          <span>Amore mio you always win</span>
          <br />
          <span>and not only a drink! ily</span>
        </React.Fragment>
      );
    }

    if (random) {
      const { wins } = this.state;
      const cookies = new Cookies();
      console.log('before Wins', wins);
      const newWins = parseInt(wins) + 1;
      console.log('newWins', newWins);

      // set coockie
      cookies.set('wins', newWins.toString(), {
        path: '/',
        expires: new Date(
          moment()
            .add(1, 'days')
            .format()
        )
      });
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
          console.log('from context', name, lastName);
          return name === undefined && lastName === undefined ? (
            // if there is no data, redirect to homepage
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

export default withCookies(ResultPage);
// export default ResultPage;
