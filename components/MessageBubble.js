import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import Avatar from "./Avatar";
import Colors from "../constants/Colors";

const Container = styled.View`
  margin-bottom: 20px;
  flex-direction: ${props => (props.incoming ? "row" : "row-reverse")};
  padding-horizontal: 20px;
`;

const AvatarContainer = styled.View`
  margin-top: 15px;
  margin-right: ${props => (props.incoming ? "10px" : "0px")};
  margin-left: ${props => (!props.incoming ? "10px" : "0px")};
`;

const Column = styled.View`
  flex: 1;
`;

const Bubble = styled.View`
  margin-bottom: 10px;
  background-color: ${props => (props.incoming ? "#FDFDFD" : Colors.tintColor)};
  padding: 15px;
  border-radius: 15px;
  border: ${prosp => (prosp.incoming ? "1px solid #EBEBEB" : "0px")};
`;

const Message = styled.Text`
  color: ${props => (props.incoming ? Colors.blackColor : "white")};
`;

const TimeAgoContainer = styled.View`
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

const TimeAgo = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const IconContainer = styled.View`
  height: 20;
  margin-left: 10px;
`;

const MessageBubble = ({
  avatar,
  text,
  incoming = false,
  timeAgo,
  readReceipt = false
}) => (
  <Container incoming={incoming}>
    <AvatarContainer incoming={incoming}>
      <Avatar source={avatar} />
    </AvatarContainer>
    <Column>
      <Bubble incoming={incoming}>
        <Message incoming={incoming}>{text}</Message>
      </Bubble>
      <TimeAgoContainer>
        <TimeAgo>{timeAgo}</TimeAgo>
        {!incoming && (
          <IconContainer>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
              color={readReceipt ? Colors.tintColor : Colors.greyColor}
              size={Platform.OS === "ios" ? 20 : 18}
            />
          </IconContainer>
        )}
      </TimeAgoContainer>
    </Column>
  </Container>
);

MessageBubble.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  text: PropTypes.string.isRequired,
  incoming: PropTypes.bool,
  timeAgo: PropTypes.string.isRequired,
  readReceipt: PropTypes.bool
};

export default MessageBubble;
