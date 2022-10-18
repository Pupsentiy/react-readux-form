import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Label, LabelArrow } from "./Accordion.styled";
import arrow from "../../assets/img/arrow.svg";
import { IAccordion } from "./types";
import { Wrapper } from "../../styles/Global.styled";

import { RootState } from "../../store/store";
import { setToggle } from "../../store/actions/actionCreators";

const Accordion:React.FC<IAccordion> = ({ select, input }) => {
  const dispatch = useDispatch();
  const toggleAcc = useSelector((state: RootState) => state.toggleAccordion.toggleAcc);

  return (
    <Wrapper>
      <Label onClick={() => dispatch(setToggle(!toggleAcc))}>
        Скрыть дополнительные поля <LabelArrow src={arrow} />
      </Label>
      {toggleAcc && (
        <>
          {input}
          {select}
        </>
      )}
    </Wrapper>
  );
};

export default Accordion;
