import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ProductScreen from "../screens/ProductScreen";

const ScreensStack = createStackNavigator(
  {
    Tabs: MainTabNavigator,
    Product: ProductScreen
  },
  {
    headerMode: "none"
  }
);

export default createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: ScreensStack
  },
  {
    initialRouteName: "Main"
  }
);
