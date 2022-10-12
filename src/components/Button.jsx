import React from 'react'
import styled from "styled-components";

const ButtonDone = styled.button`
width:100%;
height:50px;
border-radius:8px;
font-size:14px;
line-height:14px;
text-align:center;
color:#828282;
background: #E3E3E3;
border:none;
`

const Button = () => {
  return (
    <ButtonDone>Отправить заявку</ButtonDone>
  )
}

export default Button