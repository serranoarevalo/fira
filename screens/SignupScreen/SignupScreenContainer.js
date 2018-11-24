import React from "react";
import SignupScreenPresenter from "./SignupScreenPresenter";

class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    withEmail: false
  };

  render() {
    const { withEmail } = this.state;
    return <SignupScreenPresenter withEmail={withEmail} />;
  }
}

export default SignupScreen;
