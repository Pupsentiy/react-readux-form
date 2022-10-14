import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import LongInput from "./LongInput";
import ShortInput from "./ShortInput";
import Select from "./Select";
import Accordion from "./Accordion";
import Button from "./Button";

import cities from "../mock/cities.json";
import sources from "../mock/sources.json";
import { longInputMock, placeholderSelect } from "../mock/InputMock";

import { setForm } from "../store/action";



const WrapperForm = styled.form`
  width: 31%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px 0px #35323824;
`;

const social = sources.map((e) => ({ name: e }));

const BlockForm = () => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.form);
  const [fields, setFields] = useState(initial.form);

  const handleChange = (e) => {
    console.log(e);
    setFields({
      ...fields,
      [e.target.id]: e.target.value || e.target.innerHTML,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setForm(fields));
    setFields({
      firstName: "",
      phone: "",
      email: "",
      url: "",
      companyName: "",
      fullName: "",
      city: "",
      sources: "",
    });
  };
  console.log(initial);
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
      <Button />
    </WrapperForm>
  );
};

export default BlockForm;
