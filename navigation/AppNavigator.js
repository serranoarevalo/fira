import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";

export default createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainTabNavigator
  },
  {
    initialRouteName: "Auth"
  }
);
