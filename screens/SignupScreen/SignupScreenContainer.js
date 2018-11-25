import React from "react";
import SignupScreenPresenter from "./SignupScreenPresenter";

class SignupScreen extends React.Component {
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

export default SignupScreen;
