
exports.validaEmail = (email) => {
    if(email.indexOf("@")==-1){
        return false
    }else {
        return true
    }
}

exports.isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}