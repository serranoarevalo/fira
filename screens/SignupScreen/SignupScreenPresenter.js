import React from "react";
import PropTypes from "prop-types";
import { StatusBar } from "react-native";

const SignupScreenPresenter = ({ withEmail }) => (
  <>
    <StatusBar barStyle="light-content" />
  </>
);

SignupScreenPresenter.propTypes = {
  withEmail: PropTypes.bool.isRequired
};

export default SignupScreenPresenter;
