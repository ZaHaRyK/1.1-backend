let email = "gddo@gle.com"
function validateEmail(email){
    let emreg = /^[^\s\d\.+-]([a-zA-Z\-\.\+\d]{1,20})@([a-zA-Z\d\.\!\$\%\&\'\*\+\/\=\?\^\_\-]{1,15})\.([a-zA-Z]{1,5})$/g
    if (emreg.test(email) === true){
        return "valid"
    }else {return "not valid"}
}
validateEmail(email)

let phone = "+38 (099) 567 8901"
function validatePhone(phone){
    let phreg = /^([\+38\s]+|[--\s]+)?(\(?0[\-]?9[\-]?9\)?)[\ ](\d[\ \-]?\d[\ \-]?\d[\ \-]?\d[\ \-]?\d[\ \-]?\d[\ \-]?\d)$/g 
    if (phreg.test(phone) === true){
        return "valid"
    }else {return "not valid"}
}
validatePhone(phone)

let pass = "SupperPas1"
function validatePassword (pass){
    let passreg = /(?=.*[a-zA-Z0-9]{8,})/g
    if (passreg.test(pass) === true){
        return "valid"
    }else {return "not valid"}
}
validatePassword(pass)
