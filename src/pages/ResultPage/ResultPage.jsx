import React, { PureComponent } from "react";
import Header from "../../component/Header/Header.jsx";
import Footer from "../../component/Footer/Footer.jsx";

class ResultPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

ResultPage.defaultProps = {};

ResultPage.propTypes = {};

export default ResultPage;
