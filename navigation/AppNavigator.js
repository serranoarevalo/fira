import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ProductScreen from "../screens/ProductScreen";

const ScreensStack = createStackNavigator(
  {
    Tabs: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null,
        headerTransparent: true
      }
    },
    Product: {
      screen: ProductScreen,
      navigationOptions: {
        headerTintColor: "white",
        headerTransparent: true
      }
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 70
      }
    },
    initialRouteName: "Tabs"
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
