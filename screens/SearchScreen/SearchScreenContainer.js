import React from "react";
import { Alert } from "react-native";
import SearchScreenPresenter from "./SearchScreenPresenter";
import SearchBar from "../../components/SearchBar";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar onSubmit={navigation.getParam("onSubmit", null)} />
  });

  constructor(props) {
    super(props);
    props.navigation.setParams({
      onSubmit: this.onSubmit
    });
  }

  onSubmit = text => {
    setTimeout(() => {
      Alert.alert(`Searching by: ${text}`);
    }, 500);
  };

  render() {
    return <SearchScreenPresenter />;
  }
}
