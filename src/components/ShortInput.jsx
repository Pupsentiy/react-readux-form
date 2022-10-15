import React from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";
import { shortInputMock } from "../mock/InputMock";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled(InputMask)`
  width: 180px;
  heigth: 50px;
  border-radius: 8px;
  padding: 18px 15px;
  border: #e3e3e3 solid 2px;
  margin-bottom: 5px;

  &:focus {
    border: #0086a8 solid 2px;
  }
  &:focus ~ label {
    color: #0086a8;
  }
`;
const Title = styled.label`
  position: absolute;
  top: -5px;
  left: 10px;
  padding: 0 5px;
  background: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.25px;
`;
const Errors = styled.p`
  font-size: 10px;
  color: red;
  margin-bottom: 15px;
  margin-left: 4px;
`;
const ShortInput = ({ handleChange, fields }) => {
  const errorLabel = useSelector((state) => state.error);
  return (
    <>
      {shortInputMock &&
        shortInputMock.map((data, i) => (
          <Wrapper key={i}>
            <Input
              placeholder={data.placeholder}
              id={data.name}
              value={fields[data.name]}
              // type={data.type}
              onChange={(e) => handleChange(e)}
              // pattern={data.pattern}
              mask={data.mask}
              maskChar=""
            />
            <Title>{data.title}</Title>
            <Errors>{errorLabel[data.name]}</Errors>
          </Wrapper>
        ))}
    </>
  );
};

export default ShortInput;
