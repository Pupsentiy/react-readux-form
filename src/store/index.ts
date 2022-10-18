import { combineReducers } from 'redux'

import { form, } from './reducers/form';
import { error } from './reducers/error';
import { loader } from './reducers/loader';

export default combineReducers({
    form:form,
    error,
    loader,
});
