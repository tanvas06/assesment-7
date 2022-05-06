const zero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return (true)
            }
        }
    }
    return false
}

console.log(zero([1, 2, 3,]))

const unique = str => {
    let newStr = new Set(str)
    return [...newStr].join('')
}

console.log(unique(`MooMndaonyya`))

const pangram = str => {
    let newStr = new Set(str.toLowerCase().replace(/[^a-z]/g, ''))
    let final = [...newStr].join('')
    // console.log(final.length)
    return (final.length === 26) ? true : false
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))

const findLongestWord = arr => {
    let longest = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i].length > arr[j].length){
                longest = arr[i].length
            }
        }
    }
    return longest
}

console.log(findLongestWord(["hi", "hello", "greetings"]))