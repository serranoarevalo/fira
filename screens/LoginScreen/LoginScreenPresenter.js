import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import { StatusBar } from "react-native";
import Layout from "../../constants/Layout";
import SocialLogin from "../../components/SocialLogin";
import AuthText from "../../components/AuthText";
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
  width: 100%;
  margin-bottom: 25px;
`;

const LoginScreenPresenter = ({
  email = "",
  password = "",
  onInputChange,
  navigation
}) => (
  <Container>
    <ImageBg
      source={require("../../assets/images/authBackground.jpg")}
      resizeMode="cover"
    />
    <StatusBar barStyle="light-content" />
    <ButtonsContainer>
      <SocialLogin />
      <Divider>or</Divider>
      <EmailAuth behavior="padding" enabled>
        <EmailAuthForm>
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
            text="Login"
            onPress={() => navigation.navigate("Main")}
          />
        </EmailAuthForm>
      </EmailAuth>
      <AuthTextContainer>
        <AuthText text="New user? " link="Signup now" screenName="Signup" />
      </AuthTextContainer>
    </ButtonsContainer>
  </Container>
);

LoginScreenPresenter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string
};

export default withNavigation(LoginScreenPresenter);
