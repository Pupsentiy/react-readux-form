import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import LongInput from "../longInput/LongInput";
import Accordion from "../accordion/Accordion";

import cities from "../../mock/cities.json";
import sources from "../../mock/sources.json";
import {
  longInputMock,
  placeholderSelect,
  validEmailRegex,
} from "../../mock/InputMock";
import loaderImg from "../../assets/img/loader.gif";

import {  endLoading, getError, setForm, setValidFalse, setValidTrue, startLoading } from "../../store/actions/actionCreators";
import ShortInput from "../shortInput/ShortInput";
import Select from "../select/Select";
import { ButtonSubmit, Loader, WrapperForm } from "./BlockForm.styled";


const social: { name: string }[] = sources.map((e: string) => ({ name: e }));

const BlockForm: React.FC = () => {
  const dispatch = useDispatch();
  const initial = useSelector((state:RootState) => state.form);
  const errorLabel = useSelector((state: RootState) => state.error);
  const loader = useSelector((state: RootState) => state.loader.loader);
  const valid = useSelector((state: RootState) => state.valid.valid);
  const [fields, setFields] = useState(initial);
  const [error, setError] = useState<boolean>(false);

  const checkValue = [fields]
    .map((e) => e.firstName && e.phone && e.email && e.urlSocial && e.city)
    .every((d) => d.length !== 0);

  useEffect(() => {
    if (checkValue && error) {
      dispatch(setValidTrue(true));
    }
  }, [checkValue, error]);
  
  const handleChange = (e: {target: { id: string; value: string; };}) => {
    const {id,value} = e.target

    let errors = errorLabel;
    switch (id) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? 'Поле имеет 2 или более символов' : '';
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
      [id]: value,
    });
    dispatch(getError(errors));

    const checkingFieldsErrors = Object.values(errors).every(
      (e: []) => e.length === 0
    );
    setError(checkingFieldsErrors);
    if ( checkingFieldsErrors && checkValue) {
      dispatch(setValidTrue(true));
    } else {
      dispatch(setValidFalse(false));
    }
  };

  useEffect(() => {
    console.log(initial);
  }, [initial]);
  
  const handleSubmit = (event: React.FormEvent) => {
    dispatch(startLoading(true));

    event.preventDefault();
    
    setTimeout(() => {
      dispatch(setForm(fields));
      dispatch(setValidFalse(false));
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
      dispatch(endLoading(false));
    }, 2000);
  };
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <ShortInput handleChange={handleChange} fields={fields} />
      <Select
        props={cities}
        placeholder={placeholderSelect[1]}
        fields={fields}
        setFields={setFields}
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
            fields={fields}
            setFields={setFields}
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
