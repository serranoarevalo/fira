import React from "react";
import styled from "styled-components";
import Message from "../../components/Message";

const Container = styled.ScrollView`
  background-color: white;
`;

const MessagesScreenPresenter = () => (
  <Container
    contentContainerStyle={{
      paddingHorizontal: 20,
      paddingVertical: 15
    }}
  >
    <Message
      userAvatar={require("../../assets/images/smAvatar.png")}
      name="Keith Mills"
      timeAgo="24m ago"
      preview="Hey, would you be interested in ..."
      unread
      pendingRead={2}
    />
    <Message
      userAvatar={require("../../assets/images/smAvatar.png")}
      name="Keith Mills"
      timeAgo="24m ago"
      preview="Hey, would you be interested in ..."
      delivered
    />
    <Message
      userAvatar={require("../../assets/images/smAvatar.png")}
      name="Keith Mills"
      timeAgo="24m ago"
      preview="Hey, would you be interested in ..."
      readReceipt
    />
  </Container>
);

export default MessagesScreenPresenter;
