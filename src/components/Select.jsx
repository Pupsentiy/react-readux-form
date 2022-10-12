import React, { useState } from "react";
import styled from "styled-components";

import arrow from "../assets/img/arrow.svg";

const SelectWrapper = styled.div`
  position: relative;
  border: #e3e3e3 solid 2px;
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

  .active {
    rotate: 360deg;
  }
`;
const Label = styled.span`
  width: 100%;
  padding-left: 15px;
`;
const LabelArrow = styled.img`
  position: absolute;
  top: 45%;
  right: 22px;
  rotate: 180deg;
`;
const List = styled.ul`
  position: absolute;
  z-index: 10;
  border: #e3e3e3 solid 2px;
  top: 48px;
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  background: #fff;
`;
const Li = styled.li`
  padding: 5px 15px;
  border-bottom: #e3e3e3 solid 2px;

  &:last-child {
    border-bottom: none;
  }
`;
const Select = (value) => {
  const [open, setOpen] = useState(false);
  // const selectPoint = () => {};
  return (
    <>
      <SelectWrapper onClick={() => setOpen(!open)}>
        <Label>Выберите город *</Label>
        <LabelArrow src={arrow} alt="arrow" />
        {open && (
          <List>
            {value &&
              value.value.map((item, i) => (
                <Li key={i} value={item.name} defaultValue="Выберите город *">
                  {item.name}
                </Li>)
              )}
          </List>
        )}
      </SelectWrapper>
    </>
  );
};

export default Select;
