import React from "react";
import styled from "styled-components";

import { shortInputMock } from "../mock/InputMock";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 180px;
  heigth: 50px;
  border-radius: 8px;
  padding: 18px 15px;
  border: #e3e3e3 solid 2px;
  margin-bottom: 20px;

  &:focus {
    border: 
    #0086A8 solid 2px;
}
&:focus ~ label {
  color: 
  #0086A8;
}

`;
const Title = styled.label`
  position: absolute;
  top: -5px;
  left: 10px;
  padding:0 5px;
  background: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.25px;

`;

const ShortInput = ({handleChange,fields}) => {
  return (
    <>
      {shortInputMock &&
        shortInputMock.map((data, i) => (
          <Wrapper key={i}>
            <Input placeholder={data.placeholder} id={data.name} value={fields[data.name]} type={data.type} onChange={e => handleChange(e)} pattern={data.pattern} />
            <Title>{data.title}</Title>
          </Wrapper>
        ))}
    </>
  );
};

export default ShortInput;
