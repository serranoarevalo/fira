import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";

const Container = styled.View`
  background-color: ${props =>
    props.accent ? Colors.tintColor : Colors.lightGreyColor};
  padding: 10px 15px;
  border-radius: 20px;
`;

const Text = styled.Text`
  color: ${props => (props.accent ? "white" : Colors.blackColor)};
  font-weight: 500;
`;

const SmallButton = ({ text, accent = false, onPress = null }) => (
  <TouchableOpacity onPress={onPress}>
    <Container accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Container>
  </TouchableOpacity>
);

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  onPress: PropTypes.func
};

export default SmallButton;
