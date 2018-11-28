import React from "react";
import MessagesScreenPresenter from "./MessagesScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    title: "Messages"
  };

  render() {
    return <MessagesScreenPresenter />;
  }
}
