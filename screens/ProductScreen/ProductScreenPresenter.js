import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import UserPartials from "../../components/UserPartials";

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const TimeLocation = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

const ReadMore = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 40px;
`;

const ProductScreenPresenter = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
      <Swiper
        style={{ height: getHeight(), marginBottom: 20 }}
        activeDotColor="white"
        dotColor="rgba(255, 255, 255, 0.3)"
      >
        <Image
          source={{
            uri:
              "https://i.pinimg.com/564x/8f/27/44/8f27446e4f69541cb465e50b93dae15e.jpg"
          }}
        />
        <Image
          source={{
            uri:
              "https://i.pinimg.com/564x/6e/90/41/6e90412772257e9d16b18f6449d0b141.jpg"
          }}
        />
        <Image
          source={{
            uri:
              "https://i.pinimg.com/564x/48/8a/ce/488acec32b6c8cf86fc034476b17b2bc.jpg"
          }}
        />
      </Swiper>
      <DataContainer>
        <TimeLocation>Seoul, S. Korea • 2h ago</TimeLocation>
        <NamePrice>
          <NamePriceText>MVMTH Watch</NamePriceText>
          <NamePriceText>$49</NamePriceText>
        </NamePrice>
        <Divider />
        <Description>
          Selling my 2017 DJI Spark. Barely used, pretty new in condition and
          its the “Fly More Combo". No Negotiations please.
        </Description>
        <Description>
          Seize the Moment. Meet Spark, a mini drone that features all of DJI's
          signature technologies, allowing you to seize the moment whenever you
          feel inspired.
        </Description>
        <ReadMore>Read More</ReadMore>
        <UserPartials
          name="Keith Mills"
          rating={4.6}
          avatarUrl={require("../../assets/images/smAvatar.png")}
        />
      </DataContainer>
    </ScrollView>
  </Container>
);

export default ProductScreenPresenter;
