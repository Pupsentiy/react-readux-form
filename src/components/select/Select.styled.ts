import styled from "styled-components";

export const SelectWrapper = styled.div<{ open: boolean }>`
position: relative;
border: ${({ open }) => (open ? `#0086A8 solid 2px;` : `#e3e3e3 solid 2px`)};
border-radius: 8px;
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
background: #fff;
cursor: pointer;
font-size: 14px;
margin-bottom: 20px;
`;
export const Label = styled.span`
width: 100%;
padding-left: 15px;
`;
export const LabelArrow = styled.img<{ open: boolean }>`
position: absolute;
top: 45%;
right: 22px;
rotate: ${({ open }) => (open ? `180deg` : ``)};
`;
export const List = styled.ul`
position: absolute;
z-index: 10;
border: #e3e3e3 solid 2px;
top: 48px;
width: 100%;
cursor: pointer;
border-radius: 8px;
background: #fff;
`;
export const Li = styled.p`
padding: 5px 15px;
border-bottom: #e3e3e3 solid 2px;
&:last-child {
  border-bottom: none;
  &:hover {
    background: #fafafa;
    border-radius: 0px 0px 8px 8px;
  }
}
&:hover {
  background: #fafafa;
}

&:first-child {
  &:hover {
    background: #fafafa;
    border-radius: 8px 8px 0px 0px;
  }
}
`;
