import React from "react";
import styled from "styled-components";

const ButtonSubmit = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #828282;
  background: #e3e3e3;
  border: none;
`;

const Button = ({handleSubmit}) => {
  return (
    <ButtonSubmit type="button"  onClick={() => handleSubmit()}>
      Отправить заявку
    </ButtonSubmit>
  );
};

export default Button;
