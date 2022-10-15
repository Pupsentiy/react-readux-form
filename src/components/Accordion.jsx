import React, { useState } from "react";
import styled from "styled-components";

import arrow from "../assets/img/arrow.svg";

const AccordionSection = styled.div`
  width: 100%;
`;
const Container = styled.div``;

const Label = styled.p`
font-size:14px;
font-weight:400;
line-height:21px;
margin-bottom:25px;
cursor:pointer;
`

const LabelArrow = styled.img`
margin-left:8px;
  rotate: 180deg;
`;

const Accordion = ({ select, input }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <AccordionSection >
      <Label onClick={() => setClicked(!clicked)}>Скрыть дополнительные поля <LabelArrow src={arrow}/></Label>
      {clicked && (
        <Container>
          {input}
          {select}
        </Container>
      )}
    </AccordionSection>
  );
};

export default Accordion;
