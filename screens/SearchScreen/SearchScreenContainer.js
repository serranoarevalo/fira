import React from "react";
import SearchScreenPresenter from "./SearchScreenPresenter";
import SearchBar from "../../components/SearchBar";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <SearchBar
          onChange={navigation.getParam("onChange", null)}
          onSubmitEditing={navigation.getParam("onSubmitEditing", null)}
        />
      )
    };
  };

  render() {
    return <SearchScreenPresenter />;
  }
}
