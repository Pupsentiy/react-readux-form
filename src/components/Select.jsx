import React, { useRef, useState } from "react";
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
  &:hover {
    background: #fafafa;
  }
`;

const Selects = styled.select`
  width: 100%;
  height: 50px;
  background: #fff;
  margin-bottom: 20px;
  padding: 15px 15px;
  border-radius: 8px;
  border: #e3e3e3 solid 2px;
`;
const Option = styled.option`
  border-radius: 8px;
  padding: 5px 15px;
`;

const Da = styled.div`
  width: 100%;
  height: 50px;
`;
const Select = ({ props, placeholder, handleChange, fields }) => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef(null);
  // const selectPoint = () => {};
  // console.log(props)
console.log(sortRef);
  React.useEffect(() => {
    const handleClickOutside = (_event) => {
      // : MouseEvent
      // const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* <Selects
        value={fields[placeholder.name]}
        onChange={(e) => handleChange(e)}
        name={placeholder.name}
      >
        <Option value="" disabled={true}>
          {placeholder.placeholder}
        </Option>
        {props &&
          props.map((item, i) => (
            <Option key={i} value={item.name}>
              {item.name}
            </Option>
          ))}
      </Selects> */}
      <SelectWrapper onClick={() => setOpen(!open)} ref={sortRef}>
        <Label>
          {!fields[placeholder.name]
            ? placeholder.placeholder
            : fields[placeholder.name]}
        </Label>
        <LabelArrow src={arrow} alt="arrow" />
        {open && (
          <List>
            {props &&
              props.map((item, i) => (
                <Li
                  key={i}
                  onClick={(e) => handleChange(e)}
                  id={placeholder.name}
                >
                  {item.name}
                </Li>
              ))}
          </List>
        )}
      </SelectWrapper>
    </>
  );
};

export default Select;
