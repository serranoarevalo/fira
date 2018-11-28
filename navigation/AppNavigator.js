import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ProductScreen from "../screens/ProductScreen";
import ThreadScreen from "../screens/ThreadScreen";
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
        headerTintColor: "white",
        headerTransparent: true
      }
    },
    Thread: {
      screen: ThreadScreen,
      navigationOptions: {
        headerStyle: {
          ...Platform.select({
            ios: {
              borderBottomWidth: "0px"
            }
          }),
          height: 70,
          elevation: 0
        },
        headerTintColor: Colors.blackColor,
        headerTitleStyle: { fontSize: 14, color: Colors.blackColor }
      }
    }
  },
  {
    initialRouteName: "Tabs",
    headerMode: "screen"
  }
);

export default createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: ScreensStack
  },
  {
    initialRouteName: "Auth"
  }
);
