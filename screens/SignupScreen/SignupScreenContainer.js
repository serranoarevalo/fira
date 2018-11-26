import React from "react";
import SignupScreenPresenter from "./SignupScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    withEmail: false,
    name: "",
    email: "",
    password: ""
  };

  toggleMethod = () => {
    // eslint-disable-next-line
    this.setState(current => {
      return {
        withEmail: !current.withEmail
      };
    });
  };

  onInputChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };

  render() {
    const { withEmail, name, email, password } = this.state;
    return (
      <SignupScreenPresenter
        name={name}
        email={email}
        password={password}
        withEmail={withEmail}
        toggleMethod={this.toggleMethod}
        onInputChange={this.onInputChange}
      />
    );
  }
}
