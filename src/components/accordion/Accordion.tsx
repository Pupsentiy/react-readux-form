import React, { useState } from "react";

import { Label, LabelArrow } from "./Accordion.styled";
import arrow from "../../assets/img/arrow.svg";
import { IAccordion } from "./types";
import { Wrapper } from "../../styles/Global.styled";

const Accordion:React.FC<IAccordion> = ({ select, input }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Wrapper>
      <Label onClick={() => setClicked(!clicked)}>
        Скрыть дополнительные поля <LabelArrow src={arrow} />
      </Label>
      {clicked && (
        <>
          {input}
          {select}
        </>
      )}
    </Wrapper>
  );
};

export default Accordion;
