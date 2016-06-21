export function validateText(value){
    return value == '' ? false : true;
}

export function validateMail(value){
    return (value.indexOf('@') > 0 && value.indexOf('@') < (value.length-1)) ? true : false;
}

export function allValidate(validation){
    let errors = _.valuesIn(validation).filter(value => {
            return value == undefined || value !== 'success'
        });
    return (errors.length > 0) ? false : true;
}
