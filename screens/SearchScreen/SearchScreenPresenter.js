import React from "react";
import styled from "styled-components";
import { products } from "../../dummy";
import ProductCard from "../../components/ProductCard";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const Column = styled.View``;

const ScrollView = styled.ScrollView``;

const splitArray = arr => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const SearchScreenPresenter = () => (
  <Container>
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Column>
        {splitArray(products).firstHalf.map(product => (
          <ProductCard
            imgSrc={product.uri}
            price={product.price}
            name={product.name}
            key={product.name}
          />
        ))}
      </Column>
      <Column>
        {splitArray(products).secondHalf.map(product => (
          <ProductCard
            imgSrc={product.uri}
            price={product.price}
            name={product.name}
            key={product.name}
          />
        ))}
      </Column>
    </ScrollView>
  </Container>
);

export default SearchScreenPresenter;
