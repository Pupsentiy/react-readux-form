export const FORM_SUBMIT = 'FORM_SUBMIT'
export const ERROR = 'ERROR'
export const SET_LOAD = 'SET_LOAD'

export const setForm = form => ({
  type: FORM_SUBMIT,
  payload: form
})

export const getError = error => ({
  type:ERROR,
  payload:error
})

export const setLoader = load => ({
  type:SET_LOAD,
  payload:load
})

