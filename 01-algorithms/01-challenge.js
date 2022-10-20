function reverseText(str) {
    if (typeof str === "string") {
        const result = str.split("").reverse().join("")
        return result
    } else {
        return 'Wrong data! Not a text!'
    }
}

console.log(reverseText("triathlon"))
console.log(reverseText(1231232))
console.log(reverseText(true))
console.log(reverseText("Marcin"))