import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import ProductPartial from "../../components/ProductPartial";
import MessageBubble from "../../components/MessageBubble";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProductContainer = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 10px;
`;

const Messages = styled.ScrollView``;

const ThreadScreenPresenter = () => (
  <Container>
    <ProductContainer>
      <ProductPartial
        image={{
          uri:
            "https://i.pinimg.com/564x/83/58/f8/8358f80257b84f985f9493ebd9ad60e1.jpg"
        }}
        name="Wooden Clock"
        price={49}
      />
    </ProductContainer>
    <KeyboardAvoidingView>
      <Messages
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 100
        }}
      >
        <MessageBubble
          timeAgo="24m ago"
          text="Hey, thanks for the interest in my drone.
What would you like to know?"
          incoming
          avatar={require("../../assets/images/smAvatar.png")}
        />
        <MessageBubble
          timeAgo="24m ago"
          text="Nice meeting you, Keith. I’m interested and would love to know more about the drone. Is it still under warranty? Do you have the bills and stuff?"
          readReceipt
          avatar={require("../../assets/images/smAvatar2.png")}
        />
        <MessageBubble
          timeAgo="24m ago"
          text="For sure, my man. I do have them all.  It was bought last year, 24th Mar and still has warranty."
          incoming
          avatar={require("../../assets/images/smAvatar.png")}
        />
        <MessageBubble
          timeAgo="24m ago"
          text="Awesome. Would you accept 40k? I’m ready to purchase it."
          avatar={require("../../assets/images/smAvatar2.png")}
        />
      </Messages>
    </KeyboardAvoidingView>
  </Container>
);

export default ThreadScreenPresenter;
