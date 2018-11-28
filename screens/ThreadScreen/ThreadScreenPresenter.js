import React from "react";
import styled from "styled-components";
import ProductPartial from "../../components/ProductPartial";
import MessageBubble from "../../components/MessageBubble";
import ChatInput from "../../components/ChatInput";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const Content = styled.KeyboardAvoidingView`
  flex: 1;
`;

const ProductContainer = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  z-index: 9;
  position: relative;
  padding-top: 10px;
`;

const View = styled.View`
  flex: 1;
`;

const Messages = styled.ScrollView`
  flex: 1;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.scrollView = React.createRef();
    this.contentHeight = 0;
  }

  scrollToEnd = (contentWidth, contentHeight) => {
    this.contentHeight = contentHeight;
    this.scrollView.current.scrollToEnd();
  };

  scrollAgain = () =>
    this.scrollView.current.scrollTo({ x: 0, y: this.contentHeight - 200 });

  render() {
    return (
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
        <Content behavior="padding" keyboardVerticalOffset={90}>
          <View>
            <Messages
              contentContainerStyle={{
                paddingTop: 30
              }}
              onContentSizeChange={this.scrollToEnd}
              ref={this.scrollView}
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
            <ChatInput onFocus={this.scrollAgain} />
          </View>
        </Content>
      </Container>
    );
  }
}
