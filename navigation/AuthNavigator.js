import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const fade = props => {
  const {
    position,
    scene: { index }
  } = props;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
};

export default createStackNavigator(
  {
    Signup: SignupScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Signup",
    headerMode: "none",
    transitionConfig: () => ({
      screenInterpolator: props => {
        return fade(props);
      }
    })
  }
);
