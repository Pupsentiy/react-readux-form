import React from "react";
import styled from "styled-components";

import BlockInfo from "../components/blockInfo/BlockInfo";
import BlockForm from "../components/blockForm/BlockForm";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Main = () => {
  return (
    <Container>
      <BlockInfo />
      <BlockForm />
    </Container>
  );
};

export default Main;
