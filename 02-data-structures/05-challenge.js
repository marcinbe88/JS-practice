function usePredicate(arr,pred) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (pred(arr[i])) {
            result.push(arr[i])
        }
    }
    console.log(result)
}

usePredicate([1, 2, 3, 4, 5], element => element > 2) 
usePredicate(['a', 'b', 'c', 'd', 'e'], element => ['b', 'c'].includes(element))