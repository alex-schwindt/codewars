function printerError(s) {
    let arr = s.split('')
    let errors = 0
    let length = s.length
    let good = 0
    console.log(arr)
    arr.forEach((element) => ((element.toLowerCase().charCodeAt(0)-97) > 12) ? errors++ : good++)
    return `${errors}/${length}`;
}