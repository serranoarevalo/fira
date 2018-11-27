import React from "react";
import { TouchableOpacity, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreenPresenter from "./ProductScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerRight: (
      <TouchableOpacity>
        <View style={{ height: 45, justifyContent: "center", paddingLeft: 20 }}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart-empty" : "md-heart-empty"}
            size={Platform.OS === "ios" ? 26 : 20}
          />
        </View>
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      paddingRight: 9,
      paddingVertical: 10
    }
  };

  render() {
    return <ProductScreenPresenter />;
  }
}
