import React from "react";

import { IForm } from "../../store/reducers/form";
import { Wrapper } from "../../styles/Global.styled";
import { Input, Title } from "./LongInput.styled";
import { ILongInput, ILongInputMock } from "./types";

const LongInput:React.FC<ILongInput> = ({ handleChange, fields, longInputMock }) => {
  
  return (
    <>
      {longInputMock &&
        longInputMock.map((data: ILongInputMock, i:number) => (
          <Wrapper key={i}>
            <Input
              placeholder={data.placeholder}
              id={data.name}
              value={fields[data.name as keyof IForm] || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <Title>{data.title}</Title>
          </Wrapper>
        ))}
    </>
  );
};

export default LongInput;
