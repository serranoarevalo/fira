import React from "react";
import styled from "styled-components";
import { products } from "../../dummy";
import MasonryProducts from "../../components/MasonryProducts";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SearchResults = styled.Text`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
`;

const SearchScreenPresenter = () => (
  <Container>
    <MasonryProducts products={products}>
      <SearchResults>30 Search Results</SearchResults>
    </MasonryProducts>
  </Container>
);

export default SearchScreenPresenter;
