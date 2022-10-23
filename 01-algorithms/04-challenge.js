function interlace(num1, num2) {
    const numArr1 = num1.toString().split('').map(Number)
    const numArr2 = num2.toString().split('').map(Number)
    let result = []
    let length = Math.max(numArr1.length, numArr2.length)

    for (let i = 0; i < length; i++) {
        i < numArr1.length && result.push(numArr1[i])
        i < numArr2.length && result.push(numArr2[i])
    }
    return result.join('')
}

console.log(interlace(13599999,246))
console.log(interlace(111,222666))
console.log(interlace(0,222666))