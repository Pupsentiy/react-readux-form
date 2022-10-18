import { IError } from "../reducers/error";
import { IForm } from "../reducers/form";

import { END_LOADING, ERROR, FORM_SUBMIT, START_LOADING, VALID_FALSE, VALID_TRUE } from "./actionTypes";

export const setForm = (form: IForm) => ({
  type: FORM_SUBMIT,
  payload: form,
});

export const getError = (error: IError) => ({
  type: ERROR,
  payload: error,
});

export const startLoading = (load: boolean) => ({
  type: START_LOADING,
  payload:load,
});
export const endLoading = (load: boolean) => ({
  type: END_LOADING,
  payload:load,
});

export const setValidTrue = (valid: boolean) => ({
  type: VALID_TRUE,
  payload:valid,
});
export const setValidFalse= (valid: boolean) => ({
  type: VALID_FALSE,
  payload:valid,
});