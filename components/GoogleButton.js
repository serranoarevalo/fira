import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import BigButton from "./BigButton";

const Text = styled.Text`
  margin-left: 10px;
`;

const GoogleButton = () => (
  <BigButton transparent={false} onPress={() => null}>
    <Ionicons name="logo-google" size={22} color="#4287F6" />
    <Text>Continue with Google</Text>
  </BigButton>
);

export default GoogleButton;
