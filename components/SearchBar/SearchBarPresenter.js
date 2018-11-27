import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  background-color: ${Platform.OS === "ios" ? Colors.darkGreyColor : "white"};
  border-radius: 18px;
  padding-horizontal: 15px;
  width: ${Platform.OS === "ios" ? "90%" : "91%"};
  margin-right: 10px;
  height: ${Platform.OS === "ios" ? "40px" : "auto"};
`;

const XButton = styled.View`
  height: 30px;
  width: 30px;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  z-index: 10;
`;

const SearchBarPresenter = ({ onSubmit, value, updateValue, clearValue }) => (
  <Container>
    <Input
      value={value}
      onChangeText={updateValue}
      onSubmitEditing={onSubmit}
      placeholder="Search for a product"
      blurOnSubmit
      returnKeyType="search"
      underlineColorAndroid="white"
    />
    <TouchableOpacity onPressIn={clearValue}>
      <XButton>
        <Ionicons
          size={30}
          name={Platform.OS === "ios" ? "ios-close" : "md-close"}
        />
      </XButton>
    </TouchableOpacity>
  </Container>
);

SearchBarPresenter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  clearValue: PropTypes.func.isRequired
};

export default SearchBarPresenter;
