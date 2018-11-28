import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const Container = styled.View`
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${Layout.window.width / 2 - 30};
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 15px;
  min-height: 150px;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const ProductCard = ({ imgSrc, name, price, navigation }) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate("Product")}>
    <Container>
      <ImageContainer>
        <AutoHeightImage
          width={Layout.window.width / 2 - 30}
          source={{ uri: imgSrc }}
          style={{
            borderRadius: 15
          }}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Price>{`$${price}`}</Price>
    </Container>
  </TouchableWithoutFeedback>
);

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default withNavigation(ProductCard);
