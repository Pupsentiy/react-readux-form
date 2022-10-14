import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  heigth: 50px;
  border-radius: 8px;
  padding: 18px 15px;
  border: #e3e3e3 solid 2px;
  margin-bottom: 20px;
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

const LongInput = ({ handleChange, fields, longInputMock }) => {
  return (
    <>
      {longInputMock &&
        longInputMock.map((data, i) => (
          <Wrapper key={i}>
            <Input
              placeholder={data.placeholder}
              id={data.name}
              value={fields[data.name]}
              onChange={(e) => handleChange(e)}
            />
            <Title>{data.title}</Title>
          </Wrapper>
        ))}
    </>
  );
};

export default LongInput;
