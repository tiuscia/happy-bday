import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CheckPage from './pages/CheckPage/CheckPage.jsx';
import ResultPage from './pages/ResultPage/ResultPage.jsx';
import UserContextProvider from './context/UserContext.jsx';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Happy bday</title>
        <meta
          name="description"
          content="Celebrate your birthday with this contest"
        />
      </Helmet>
      <UserContextProvider>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/check" component={CheckPage} />
          <Route path="/result" component={ResultPage} />
        </Router>
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
