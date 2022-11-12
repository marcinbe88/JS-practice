function addArrays(arr1, arr2) {
    let res1 = 0
    let res2 = 0

    for (let i = 0; i < arr1.length; i++) {
        res1 += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        res2 += arr2[i]
    }
    const result = res1 + res2
    console.log(result)
    }

addArrays([1,2,8], [4,6])