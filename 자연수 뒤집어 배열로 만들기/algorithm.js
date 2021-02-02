function solution(n) {
    let answer = [];
    let arr  = n.toString().split("").reverse();
    arr.map(e => answer.push(parseInt(e, 10)))
    return answer;
}