import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import LongInput from "./LongInput";
import ShortInput from "./ShortInput";
import Select from "./Select";
import Accordion from "./Accordion";

import cities from "../mock/cities.json";
import sources from "../mock/sources.json";
import {
  longInputMock,
  placeholderSelect,
  validEmailRegex,
} from "../mock/InputMock";
import loaderImg from "../assets/img/loader.gif";
import { getError, setForm, setLoader } from "../store/action";

const WrapperForm = styled.form`
  width: 31%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px 0px #35323824;
`;
const ButtonSubmit = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: ${({ valid }) => (valid === false ? `#828282` : `#fff`)};
  background: ${({ valid }) => (valid === false ? `#e3e3e3` : `#0086A8;`)};
  border: none;
  cursor: ${({ valid }) => (valid === true ? `pointer` : ``)};

  &:hover {
    background: ${({ valid, loader }) =>
      valid === true && loader === false ? `#007693` : ``};
  }

  &:active {
    background: ${({ valid }) => (valid === true ? `#00657E` : ``)};
  }
`;

const Loader = styled.img`
  width: 30px;
  heigth: 30px;
`;
const social = sources.map((e) => ({ name: e }));
const cityMass = cities.map((e) => e.name);

const BlockForm = () => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.form);
  const errorLabel = useSelector((state) => state.error);
  const loader = useSelector((state) => state.loader.loader);
  const [fields, setFields] = useState(initial.form);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  const checkValue = [fields]
    .map((e) => e.firstName && e.phone && e.email && e.urlSocial && e.city)
    .every((d) => d.length !== 0);

  useEffect(() => {
    if (checkValue && error) {
      setValid(true);
    }
  }, [checkValue, valid, error]);

  const handleChange = (e) => {
    const { id, value, innerHTML } = e.target;
    let errors = errorLabel;

    switch (id) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? "Поле имеет 2 или более символов" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Поле заполнено некорректно";
        break;
      case "phone":
        errors.phone = value.length < 17 ? "Поле заполнено некорректно" : "";
        break;
      case "urlSocial":
        errors.urlSocial = value.length < 8 ? "Поле заполнено некорректно" : "";
        break;
      default:
        break;
    }
    setFields({
      ...fields,
      [id]: value || innerHTML,
    });
    dispatch(getError(errors));

    const checkingFieldsErrors = Object.values(errors).every(
      (e) => e.length === 0
    );
    setError(checkingFieldsErrors);
    if (cityMass.includes(innerHTML) && checkingFieldsErrors) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    console.log(initial);
  }, [initial]);

  const handleSubmit = (event) => {
    dispatch(setLoader(true));
    event.preventDefault();
    setTimeout(() => {
      dispatch(setForm(fields));
      setValid(false);
      setFields({
        firstName: "",
        phone: "",
        email: "",
        urlSocial: "",
        companyName: "",
        fullName: "",
        city: "",
        sources: "",
      });
      dispatch(setLoader(false));
    }, 2000);
  };

  // onClick={() => dispatch(setLoader(false))}
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <ShortInput handleChange={handleChange} fields={fields} />
      <Select
        props={cities}
        placeholder={placeholderSelect[1]}
        handleChange={handleChange}
        fields={fields}
      />
      <LongInput
        handleChange={handleChange}
        fields={fields}
        longInputMock={[longInputMock[0]]}
      />
      <Accordion
        select={
          <Select
            props={social}
            placeholder={placeholderSelect[0]}
            handleChange={handleChange}
            fields={fields}
          />
        }
        input={
          <LongInput
            handleChange={handleChange}
            fields={fields}
            longInputMock={[longInputMock[1]]}
          />
        }
      />
      <ButtonSubmit
        type="submit"
        disabled={valid === false}
        valid={valid}
        loader={loader}
      >
        {loader === false ? (
          <>Отправить заявку</>
        ) : (
          <Loader src={loaderImg} alt="loader" />
        )}
      </ButtonSubmit>
    </WrapperForm>
  );
};

export default BlockForm;
