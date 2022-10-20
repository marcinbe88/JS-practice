function isPasswordCorrect(password) {
    const specialSigns = ['!' , '@' ,'#' , '$' , '%' , '^' , '&' , '*' , '?'
    ,'-' , '=' , '+' , '<' , '>' , '/']
    const numbers = ['0','1','2','3','4','5','6','7','8','9']
    
    if (
        password.length >= 6 &&
        specialSigns.some(el => password.includes(el)) &&
        numbers.some(el => password.includes(el))
    ) {
        return true
    } else {
        return false
    }
}

console.log(isPasswordCorrect('Marcin8!'))
console.log(isPasswordCorrect('wiewiorka'))
console.log(isPasswordCorrect('6546654!'))