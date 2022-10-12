import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width:100%;
`;

const Input = styled.input`
  width: 100%;
  heigth: 50px;
  border-radius: 8px;
  padding: 18px 15px;
  border: #e3e3e3 solid 2px;
  margin-bottom: 20px;
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

const LongInput = (value) => {
  return (
    <>
      {value &&
        value.value.map((data, i) => (
          <Wrapper key={i}>
            <Input placeholder={data.placeholder} legend={data.legend} />
            <Title>{data.legend}</Title>
          </Wrapper>
        ))}
    </>
  );
};

export default LongInput;
