function countWordOccurences(str) {
    let result = {}
    const arr = str.split(" ")

    for (let i = 0; i < arr.length; i++) {
        const filteredArray = arr.filter(word => word === arr[i])
        result[arr[i]] = filteredArray.length
    }
    return result
}

console.log(countWordOccurences("zobaczymy czy dziala zobaczymy"))
console.log(countWordOccurences("Tu sie nic nie powtarza"))
console.log(countWordOccurences("Pochodze z Gdyni i mieszkam w Gdyni"))