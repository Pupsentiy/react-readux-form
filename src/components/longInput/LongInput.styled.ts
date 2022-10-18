import styled from "styled-components";

export const Input = styled.input`
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