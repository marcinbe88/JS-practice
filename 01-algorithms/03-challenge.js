function createPhoneNumber(arr) {
    if (arr.length === 10) {
        const result = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
        return result
    } else if (arr.length < 10) {
        return ("Za mało cyfr!")
    } else if (arr.length > 10) {
        return ("Za dużo cyfr!")
    } 
    console.log(arr.length)
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));