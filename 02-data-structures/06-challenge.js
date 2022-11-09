function flat(arr) {
    let result = []
    const allValues = arr.join().split(',')
    for (let i = 0; i < allValues.length; i++) {
        if (result.includes(allValues[i]) || allValues[i] === '') { 
        } else {
            result.push(allValues[i])
        }
    }
    console.log(result)   
}

flat([1, [2, 3, undefined, 4, 2], [1, 'Dominik', null, 5], 3, ['Dominik', 6]])
