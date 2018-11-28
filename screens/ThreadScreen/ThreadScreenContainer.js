import React from "react";
import ThreadScreenPresenter from "./ThreadScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    title: "Keith Mills"
  };

  render() {
    return <ThreadScreenPresenter />;
  }
}
