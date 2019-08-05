import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
  state: {
    name: '',
    lastName: ''
  };

  setName = name => {
    this.setState({
      name
    });
  };

  setLastName = lastName => {
    this.setState({
      lastName
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setName: this.setName,
          setLastName: this.setLastName
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
