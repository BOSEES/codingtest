function solution(n) {
    let arr = n.toString().split("").sort((a, b) => b - a).join("");
    return parseInt(arr)
}