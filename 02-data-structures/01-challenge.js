const array = [4, 3, 8, 11, 17, 2, 9]
    let sum = 0
    let multiply = 1
    let sumEven = 0

for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
    average = sum/array.length
    multiply = multiply * array[i]
    if (array[i] % 2 === 0) {
        sumEven = sumEven + array[i] 
    }
    max = Math.max(...array)
    min = Math.min(...array)
}
console.log(sum)
console.log(average)
console.log(multiply)
console.log(sumEven)
console.log(max)
console.log(min)