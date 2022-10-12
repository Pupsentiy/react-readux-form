import React from "react";
import styled from "styled-components";

import logo from "../assets/img/logo.svg";

const WrapperInfo = styled.section`
  width: 65%;
  margin-right: 60px;
  padding: 45px 0;
`;
const Logo = styled.img`
  display: block;
  width: 475px;
  height: 70px;
  margin-bottom: 40px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 40px;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 20px;
`;
const Link = styled.a`
  color: #0086a8;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const BlockInfo = () => {
  return (
    <WrapperInfo>
      <Logo src={logo} alt="logo" />
      <Title>Оставьте заявку и станьте частью нашей команды</Title>
      <Description>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
      </Description>
      <Description>
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж современной,
        качественной, удобной, функциональной и эксклюзивной мебели.
      </Description>
      <Description>
        Ознакомиться с проектами можете в нашем <Link href="#">портфолио</Link>.
        Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с
        радостью поможем Вам: составим уникальные условия сотрудничества,
        предоставим 3D модели (уточняйте у менеджеров) и разработаем
        коммерческое предложение к Вашему проекту или изображениям.
      </Description>
    </WrapperInfo>
  );
};

export default BlockInfo;
