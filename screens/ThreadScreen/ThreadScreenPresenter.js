import React from "react";
import styled from "styled-components";
import ProductPartial from "../../components/ProductPartial";

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
  </Container>
);

export default ThreadScreenPresenter;
