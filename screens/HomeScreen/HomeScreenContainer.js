import React from "react";
import HomeScreenPresenter from "./HomeScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    title: "Recently Added"
  };

  render() {
    return <HomeScreenPresenter />;
  }
}
