function emojiTranslator(str) {
    
    const emojiMappings = {
        frontend: 'đť',
        close: 'â',
        infoShare: 'đ',
        ':D': 'đ',
        ':)': 'đ',
        ':O': 'đ˛',
        ':(': 'đ'
    };

    const arr = str.split(" ")
    const keyWord = Object.getOwnPropertyNames(emojiMappings)
    const emoji = Object.values(emojiMappings)

    // console.log(arr)
    // console.log(keyWord)
    // console.log(emoji)

    let result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < keyWord.length; j++) {
            if (arr[i] === keyWord[j]) {
                result.push(emoji[j])
            }
        }
        result.push(arr[i])
    }
    console.log(result.join(" "))
}

emojiTranslator('Jestem developerem! frontend :D')
emojiTranslator('WyĹÄcz komputer. close')

