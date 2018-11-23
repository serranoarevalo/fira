import React from "react";
import SignupScreenPresenter from "./SignupScreenPresenter";

class SignupScreen extends React.Component {
  state = {
    withEmail: false
  };

  render() {
    const { withEmail } = this.state;
    return <SignupScreenPresenter withEmail={withEmail} />;
  }
}

export default SignupScreen;
