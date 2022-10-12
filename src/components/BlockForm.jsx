import React from "react";
import styled from "styled-components";

import LongInput from "./LongInput";
import ShortInput from "./ShortInput";
import Select from "./Select";
import Accordion from "./Accordion";

import city from "../mock/cities.json";
import rek from "../mock/sources.json";
import { longInputMock } from "../mock/longInputMock";
import Button from "./Button";

const WrapperForm = styled.form`
  width: 31%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px 0px #35323824;
`;

const AccordionSection = styled.div`
  width: 100%;
`;
const Container = styled.div``;


const BlockForm = () => {
  const social = rek.map((e) => ({ name: e }));
  return (
    <WrapperForm>
      <ShortInput />
      <Select value={city} />
      <LongInput value={[longInputMock[0]]} />
      <Accordion select={<Select value={social} />} input={<LongInput value={[longInputMock[1]]} />}/>
      <Button/>
    </WrapperForm>
  );
};

export default BlockForm;
