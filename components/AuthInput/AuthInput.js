import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Mixins from "../../constants/Mixins";
import Layout from "../../constants/Layout";

const Input = styled.TextInput`
  padding: 15px 20px;
  border: ${Mixins.authBorder};
  border-radius: ${Layout.btnRadius};
  width: 100%;
  margin-bottom: 20px;
`;

const AuthInput = ({
  placeholder,
  password = false,
  value,
  keyboardType = "default",
  onChange
}) => (
  <Input
    onChangeText={onChange}
    placeholder={placeholder}
    value={value}
    keyboardType={keyboardType}
    secureTextEntry={password}
    placeholderTextColor="white"
  />
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AuthInput;
