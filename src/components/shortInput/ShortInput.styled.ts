import styled from "styled-components";
import InputMask from "react-input-mask";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(InputMask)`
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
export const Title = styled.label`
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
export const Errors = styled.p`
  font-size: 10px;
  color: red;
  margin-bottom: 15px;
  margin-left: 4px;
`;