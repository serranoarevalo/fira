import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  padding: 10px;
`;

const IconButton = ({ icon, color = "white", size = 32, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Ionicons name={icon} size={size} color={color} />
    </Container>
  </TouchableOpacity>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func.isRequired
};

export default IconButton;
