import styled from "styled-components";

export const WrapperInfo = styled.section`
  width: 65%;
  margin-right: 60px;
  padding: 45px 0;
`;
export const Logo = styled.img`
  display: block;
  width: 475px;
  height: 70px;
  margin-bottom: 40px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 40px;
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 20px;
`;
export const Link = styled.a`
  color: #0086a8;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;