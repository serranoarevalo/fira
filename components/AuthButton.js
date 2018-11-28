import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BigButton from "./BigButton";

const DarkText = styled.Text`
  color: white;
`;

const LightText = styled.Text``;

const AuthButton = ({ text, transparent, onPress }) => (
  <BigButton transparent={transparent} onPress={onPress}>
    {transparent ? <DarkText>{text}</DarkText> : <LightText>{text}</LightText>}
  </BigButton>
);

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  transparent: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default AuthButton;
