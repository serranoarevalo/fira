import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

export default createStackNavigator(
  {
    Signup: SignupScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Signup",
    mode: "modal"
  }
);
