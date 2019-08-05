import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./pages/HomePage/HomePage.jsx";
import CheckContainer from "./pages/CheckPage/CheckPage.jsx";

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
      <Router>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/check" component={CheckContainer} />
        {/* <Route path="/result" component={Result} /> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
