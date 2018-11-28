import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { Platform, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const Container = styled.View`
  border: 1px solid #ebebeb;
  background-color: white;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Input = styled.TextInput`
  height: 60px;
  width: 90%;
`;

const IconContainer = styled.View``;

const ChatInput = ({ onFocus }) => (
  <Container>
    <Input
      placeholder="Type something"
      placeholderColor={Colors.greyColor}
      onFocus={onFocus}
    />
    <TouchableOpacity>
      <IconContainer>
        <Ionicons
          name={Platform.OS === "ios" ? "ios-send" : "md-send"}
          color={Colors.blackColor}
          size={26}
        />
      </IconContainer>
    </TouchableOpacity>
  </Container>
);

ChatInput.propTypes = {
  onFocus: PropTypes.func
};

export default ChatInput;
