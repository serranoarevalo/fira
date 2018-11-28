import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import styled from "styled-components";
import Colors from "../constants/Colors";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: rgba(150, 150, 150, 0.1);
`;

const Column = styled.View`
  flex-direction: row;
`;

const View = styled.View`
  margin-left: 20px;
`;

const IconContainer = styled.View``;

const LinkName = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 5px;
`;

const LinkDescription = styled.Text`
  font-size: 12px;
  color: ${Colors.greyColor};
`;

const ICON_SIZE = Platform.OS === "ios" ? 26 : 20;

const ProfileLink = ({ iconName, name, description }) => (
  <Container>
    <Column>
      <IconContainer>
        <Ionicons name={iconName} size={ICON_SIZE} color={Colors.greyColor} />
      </IconContainer>
      <View>
        <LinkName>{name}</LinkName>
        <LinkDescription>{description}</LinkDescription>
      </View>
    </Column>
    <IconContainer>
      <Ionicons
        name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
        size={ICON_SIZE}
        color={Colors.greyColor}
      />
    </IconContainer>
  </Container>
);

ProfileLink.propTypes = {
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProfileLink;
