import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  position: relative;
  padding-vertical: 15px;
`;

const Input = styled.TextInput`
  background-color: ${Colors.darkGreyColor};
  border-radius: 18px;
  padding-horizontal: 15px;
  flex: 1;
`;

const XButton = styled.View`
  position: absolute;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: white;
`;

const SearchBarPresenter = ({ onSubmit, value, updateValue }) => (
  <Container>
    <Input
      value={value}
      onChangeText={updateValue}
      onSubmitEditing={onSubmit}
      placeholder="Search for a product"
    />
    <XButton>
      <Ionicons
        size={18}
        name={Platform.OS === "ios" ? "ios-close" : "md-close"}
      />
    </XButton>
  </Container>
);

SearchBarPresenter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired
};

export default SearchBarPresenter;
