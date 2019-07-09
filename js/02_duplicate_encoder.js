function duplicateEncode(word) {
    const str = word.toLowerCase().split('')
    let out = []
    for (let i = 0; i <= str.length - 1; i++) {
        if (str.filter(x => str[i] === x).length > 1) {
            out.push(')')
        } else {
            out.push('(')
        }
    }
    return out.join('')
}

console.log(duplicateEncode("din"), "> (((");
console.log(duplicateEncode("(( @"), "> ))((");
console.log(duplicateEncode("recede"), "> ()()()");
console.log(duplicateEncode("Success"), "> )())())", "should ignore case");