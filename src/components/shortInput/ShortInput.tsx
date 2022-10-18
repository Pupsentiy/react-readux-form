import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { shortInputMock } from "../../mock/InputMock";
import { IError } from "../../store/reducers/error";
import { IForm } from "../../store/reducers/form";

import { Errors, Input, Title, Wrapper } from "./ShortInput.styled";

import { IShortInput, IShortInputMock } from "./types";


const ShortInput: React.FC<IShortInput> = ({ handleChange, fields }) => {
  const errorLabel = useSelector((state: RootState) => state.error);
  return (
    <>
      {shortInputMock &&
        shortInputMock.map((data: IShortInputMock, i: number) => (
          <Wrapper key={i}>
            <Input
              placeholder={data.placeholder}
              id={data.name}
              value={fields[data.name as keyof IForm] || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              mask={data.mask}
              // @ts-ignore
              maskChar={null}
            />
            <Title>{data.title}</Title>
            <Errors>{errorLabel[data.name as keyof IError]}</Errors>
          </Wrapper>
        ))}
    </>
  );
};

export default ShortInput;
