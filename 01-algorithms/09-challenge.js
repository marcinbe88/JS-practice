function caesarCipher(string) {
    let result = []
    const rot13AM = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    const rot13NZ = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numbersAndSigns = ['1', '2', '3','4', '5', '6', '7','8', '9', '!', '@', '#', 
    '$', '%', '^', '&', '*', '(', ')', '-', '_', ':', ';', '<', '>', '?']


    if (string === '' || typeof string !== 'string'){
        console.log('Wrong input! Write a text!')
    } else {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                result.push(" ")          
            } else {
                for (let j = 0; j < rot13AM.length; j++)
                    if (string[i] === rot13AM[j]) {
                        result.push(rot13NZ[j])
                    } else if (string[i] === rot13NZ[j]) {
                    result.push(rot13AM[j])            
                    } else if (string[i] === numbersAndSigns[j]) {
                        result.push(string[i])
                    }
            }
        } console.log(result.join(""))
    }
}

caesarCipher('infoShare?')
caesarCipher('Nauka JavaScriptu daje efekty11')
caesarCipher('')
caesarCipher(54645)