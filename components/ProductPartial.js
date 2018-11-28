import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SmallButton from "./SmallButton";
import Colors from "../constants/Colors";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Image = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 6px;
  margin-right: 15px;
`;

const ProductData = styled.View``;

const ProductName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
  margin-bottom: 7px;
`;

const ProductPrice = styled.Text`
  font-weight: 600;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProductPartial = ({ image, name, price }) => (
  <Container>
    <Column>
      <Image source={image} />
      <ProductData>
        <ProductName>{name}</ProductName>
        <ProductPrice>{`$ ${price}`}</ProductPrice>
      </ProductData>
    </Column>
    <SmallButton text="Buy Now" accent />
  </Container>
);

ProductPartial.propTypes = {
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductPartial;
