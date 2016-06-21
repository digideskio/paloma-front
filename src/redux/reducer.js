import {IS_VALID_SURNAME, IS_VALID_NAME, IS_VALID_MAIL_PRIVATE} from './actionTypes';
import {allValidate} from '../validators/validators';

const getInitialState = () => {
    return {
        allValidated: false,
        validation : {surname: undefined, name: undefined, mailprivate: undefined}
    };
}

export function behavior(state = getInitialState(), action) {
    switch(action.type){
        case IS_VALID_SURNAME: {
            let newValidation = {...state.validation, surname: action.isValid};
            return {
                ...state,
                validation: newValidation,
                allValidated : allValidate(newValidation)
            };
        }
        case IS_VALID_NAME: {
            let newValidation = {...state.validation, name: action.isValid};
            return {
                ...state,
                validation: newValidation,
                allValidated : allValidate(newValidation)
            };
        }
        case IS_VALID_MAIL_PRIVATE: {
        let newValidation = {...state.validation, mailprivate: action.isValid};
            return {
                ...state,
                validation: newValidation,
                allValidated : allValidate(newValidation)
            };
        }
        default: {
            return state;
        }


    }
}
