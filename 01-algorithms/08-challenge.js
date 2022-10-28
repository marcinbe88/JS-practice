function toCamelCase(string) {
    let result = []
    const stringArray = string.split("")
    for (i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "-" ||
            stringArray[i] === "_") {
            result.push(stringArray[i+1].toUpperCase())
        } else if (stringArray[i-1] === "-" ||
            stringArray[i-1] === "_") {
            result.push("")
        } else {
            result.push(stringArray[i])
        }
    }
    console.log(result.join(''))
}

toCamelCase('dupa_zbita')
toCamelCase('java_script')
toCamelCase('Java-Script')
toCamelCase('asp_Net_Core')



