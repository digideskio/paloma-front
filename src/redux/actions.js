import { IS_VALID_SURNAME, IS_VALID_NAME, IS_VALID_MAIL_PRIVATE} from './actionTypes';

export const isValidSurname = (isValid) => {
  return {
    type: IS_VALID_SURNAME,
    isValid
  }
}

export const isValidName = (isValid) => {
  return {
    type: IS_VALID_NAME,
    isValid
  }
}

export const isValidMailPrivate = (isValid) => {
  return {
    type: IS_VALID_MAIL_PRIVATE,
    isValid
  }
}
