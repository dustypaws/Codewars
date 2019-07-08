function solution(str) {
    let out = []
    for (let i = 0; i < str.length; i += 2) {
        const last = (str[i + 1] === undefined) ? '_' : str[i + 1]
        out.push(str[i] + last)
    }
    return out
}
console.log(solution('abc'), ["ab", "c_"])
console.log(solution('abcdef'), ["ab", "cd", "ef"])