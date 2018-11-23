import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

export default createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: "Signup"
  }
);
