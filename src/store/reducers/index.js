import { combineReducers } from 'redux'

import { form, } from './form';
import { error } from './error';
import { loader } from './loader';

export default combineReducers({
    form,
    error,
    loader,
});
