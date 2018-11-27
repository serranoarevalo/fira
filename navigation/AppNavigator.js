import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ProductScreen from "../screens/ProductScreen";
import Colors from "../constants/Colors";

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
        headerTintColor: Colors.blackColor,
        headerTransparent: true
      }
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 70
      }
    }
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
