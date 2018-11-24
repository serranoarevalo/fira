import React from "react";
import { Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { AppLoading, Asset, Font } from "expo";

import AppNavigator from "./navigation/AppNavigator";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    await Asset.loadAsync([
      require("./assets/images/authBackground.jpg"),
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]);
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Container>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Container>
    );
  }
}
