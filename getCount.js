function getCount(str) {
    const myArray = str.split('')
    let vowel = 0
    for (let i= 0; i < myArray.length; i++) {
        if (str.myArray[i] == 'a' || 'e' || 'i' || 'o' || 'u') {
            vowel += 1
        } 
        else {
            vowel += 0
        }
    }
    return vowel
}
getCount('alex')