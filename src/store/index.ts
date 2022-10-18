import { combineReducers } from 'redux'

import { form, } from './reducers/form';
import { error } from './reducers/error';
import { loader } from './reducers/loader';
import { valid} from './reducers/validForm'
import { toggleAccordion} from './reducers/toggleAccordion'

export default combineReducers({
    form:form,
    error,
    loader,
    valid, 
    toggleAccordion
});
