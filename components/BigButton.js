import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Mixins from "../constants/Mixins";

const Container = styled.View`
  background-color: ${props => (props.transparent ? "transparent" : "#FFFFFF")};
  border-radius: ${Layout.btnRadius};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: ${prosp => (prosp.transparent ? Mixins.authBorder : "")};
`;

const BigButton = ({ transparent = false, children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container transparent={transparent}>{children}</Container>
  </TouchableOpacity>
);

BigButton.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPress: PropTypes.func.isRequired
};

export default BigButton;
