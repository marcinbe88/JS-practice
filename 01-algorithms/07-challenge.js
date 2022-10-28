function tagFinder(string) {
    let result = []
    const stringArray = string.split(" ")

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].includes('#')) {
            const hashtagArray = stringArray[i].split("")
            const hashtagWord = hashtagArray.slice(1).join("")
            result.push(hashtagWord)
        }
    }
    return result
}

console.log(tagFinder('Lubie #plywanie'))
console.log(tagFinder('#Gdynia uwielbia #triathlon'))
console.log(tagFinder('Jestem w trakcie nauki #js #javascript'))