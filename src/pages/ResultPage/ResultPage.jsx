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
      winsCounter: cookies.get('winsCounter') || 0,
      firstWinDate: cookies.get('firstWinDate') || '',
      lastWinDate: cookies.get('lastWinDate') || ''
    };
  }

  resultMsg = (name, lastName) => {
    const { winsCounter, firstWinDate, lastWinDate } = this.state;
    let random = Math.round(Math.random());

    if (name.toLowerCase() === 'lauren' && lastName.toLowerCase() === 'lewis') {
      // she can win how many times she wants
      return (
        <React.Fragment>
          <div className="result__big">you win</div>
          <span>Amore mio you always win</span>
          <br />
          <span>and not only a drink! ily</span>
        </React.Fragment>
      );
    }

    // if last win is less then 15 min from now you lose
    // check difference between first win and now is more then 3 hours you lose = LIMIT
    if (firstWinDate) {
      const diffFirstWin = moment().diff(firstWinDate, 'hours');
      const diffLastWin = moment().diff(lastWinDate, 'minutes');
      if (diffFirstWin >= 3 || diffLastWin < 10 || winsCounter === '5') {
        random = 0;
      }
    }

    if (random) {
      // set cookie
      const cookies = new Cookies();
      const newWinsCounter = parseInt(winsCounter) + 1;

      // set the date/time of the fist win in the cookie
      if (newWinsCounter === 1) {
        cookies.set('firstWinDate', moment().format(), {
          path: '/',
          expires: new Date(
            moment()
              .add(1, 'days')
              .format()
          )
        });
      }

      // add win in the cookie counter
      cookies.set('winsCounter', newWinsCounter, {
        path: '/',
        expires: new Date(
          moment()
            .add(1, 'days')
            .format()
        )
      });

      // ad date of the last win
      cookies.set('lastWinDate', moment().format(), {
        path: '/',
        expires: new Date(
          moment()
            .add(1, 'days')
            .format()
        )
      });

      return (
        <React.Fragment>
          <div className="result__big">
            you won{' '}
            <span className="result__date">
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </span>
          </div>
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
    }

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
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ name, lastName }) => {
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
