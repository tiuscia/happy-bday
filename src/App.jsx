import React from 'react';
import Helmet from 'react-helmet';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CheckPage from './pages/CheckPage/CheckPage.jsx';
import ResultPage from './pages/ResultPage/ResultPage.jsx';
import UserContextProvider from './context/UserContext.jsx';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Happy bday to me</title>
        <meta
          name="description"
          content="Celebrate your birthday with this contest"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Red+Hat+Text:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <UserContextProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/check" component={CheckPage} />
            <Route path="/result" component={ResultPage} />
          </Switch>
        </HashRouter>
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
