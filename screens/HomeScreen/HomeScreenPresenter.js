import React from "react";
import styled from "styled-components";
import { products } from "../../dummy";
import MasonryProducts from "../../components/MasonryProducts";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const HomeScreenPresenter = () => (
  <Container>
    <MasonryProducts products={products} />
  </Container>
);

export default HomeScreenPresenter;
