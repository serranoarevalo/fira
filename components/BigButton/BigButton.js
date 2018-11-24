import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../../constants/Layout";

const Container = styled.View`
  background-color: ${props => (props.transparent ? "transparent" : "#FFFFFF")};
  border-radius: ${Layout.btnRadius};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: ${prosp =>
    prosp.transparent ? "2px solid rgba(255, 255, 255, 0.5)" : ""};
`;

const BigButton = ({ transparent, children, onTap }) => (
  <TouchableOpacity onPress={onTap}>
    <Container transparent={transparent}>{children}</Container>
  </TouchableOpacity>
);

BigButton.defaultProps = {
  transparent: false,
  onTap: () => null
};

BigButton.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onTap: PropTypes.func
};

export default BigButton;
