function createPhoneNumber(arr) {
    const bracket = `(${arr[0]}${arr[1]}${arr[2]}) `
    const begin = `${arr[3]}${arr[4]}${arr[5]}-`
    const end = `${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    const result = bracket + begin + end
    return result
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));