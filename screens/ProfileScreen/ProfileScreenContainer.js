import React from "react";
import ProfileScreenPresenter from "./ProfileScreenPresenter";

export default class extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return <ProfileScreenPresenter />;
  }
}
