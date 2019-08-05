import React, { PureComponent } from "react";
import Header from "../../component/Header/Header.jsx";
import Button from "../../component/Button/Button.jsx";
import Footer from "../../component/Footer/Footer.jsx";

class CheckPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Button label="controlla" />
        <Footer />
      </React.Fragment>
    );
  }
}

CheckPage.defaultProps = {};

CheckPage.propTypes = {};

export default CheckPage;
