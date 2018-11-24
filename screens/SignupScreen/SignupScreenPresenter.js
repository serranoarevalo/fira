import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StatusBar } from "react-native";
import Layout from "../../constants/Layout";
import SocialLogin from "../../components/SocialLogin";
import BigButton from "../../components/BigButton";
import AuthText from "../../components/AuthText";

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
`;

const Divider = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 25px;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const AuthTextContainer = styled.View`
  margin: 30px 0px;
`;

const SignupScreenPresenter = ({ withEmail }) => (
  <Container>
    <ImageBg
      source={require("../../assets/images/authBackground.jpg")}
      resizeMode="cover"
    />
    <StatusBar barStyle="light-content" />
    {withEmail ? null : (
      <ButtonsContainer>
        <SocialLogin />
        <Divider>or</Divider>
        <BigButton transparent onTap={() => null}>
          <BtnText>Signup with Email</BtnText>
        </BigButton>
        <AuthTextContainer>
          <AuthText
            text="Existing user? "
            link="Login now"
            screenName="Login"
          />
        </AuthTextContainer>
      </ButtonsContainer>
    )}
  </Container>
);

SignupScreenPresenter.propTypes = {
  withEmail: PropTypes.bool.isRequired
};

export default SignupScreenPresenter;
