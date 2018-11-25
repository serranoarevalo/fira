import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StatusBar, Platform } from "react-native";
import Layout from "../../constants/Layout";
import SocialLogin from "../../components/SocialLogin";
import AuthText from "../../components/AuthText";
import IconButton from "../../components/IconButton";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const ImageBg = styled.Image`
  position: absolute;
  bottom: 0;
  height: ${Layout.window.height};
  width: ${Layout.window.width};
`;

const ButtonsContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
  width: 80%;
`;

const Divider = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 25px;
`;

const AuthTextContainer = styled.View`
  margin: 30px 0px;
`;

const EmailAuth = styled.KeyboardAvoidingView`
  align-items: center;
  width: 100%;
`;

const EmailAuthForm = styled.View`
  margin-top: 20px;
  width: 100%;
  margin-bottom: 25px;
`;

const SignupScreenPresenter = ({
  withEmail,
  toggleMethod,
  name = "",
  email = "",
  password = "",
  onInputChange
}) => (
  <Container>
    <ImageBg
      source={require("../../assets/images/authBackground.jpg")}
      resizeMode="cover"
    />
    <StatusBar barStyle="light-content" />
    <ButtonsContainer>
      {withEmail ? (
        <EmailAuth behavior="padding" enabled>
          <IconButton
            icon={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            onPress={toggleMethod}
            color="rgba(255, 255, 255, 0.5)"
          />
          <EmailAuthForm>
            <AuthInput
              placeholder="Name"
              value={name}
              onChange={onInputChange}
              name="name"
            />
            <AuthInput
              name="email"
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChange={onInputChange}
            />
            <AuthInput
              name="password"
              placeholder="Password"
              value={password}
              password
              onChange={onInputChange}
            />
            <AuthButton
              transparent={false}
              text="Signup"
              onPress={() => null}
            />
          </EmailAuthForm>
        </EmailAuth>
      ) : (
        <>
          <SocialLogin />
          <Divider>or</Divider>
          <AuthButton
            transparent
            text="Signup with Email"
            onPress={toggleMethod}
          />
          <AuthTextContainer>
            <AuthText
              text="Existing user? "
              link="Login now"
              screenName="Login"
            />
          </AuthTextContainer>
        </>
      )}
    </ButtonsContainer>
  </Container>
);

SignupScreenPresenter.propTypes = {
  withEmail: PropTypes.bool.isRequired,
  toggleMethod: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

export default SignupScreenPresenter;
