import React from "react";
import styled from "styled-components";

import BlockInfo from "./BlockInfo";
import BlockForm from "./BlockForm";

const Container = styled.div`
  width: 100%;
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
