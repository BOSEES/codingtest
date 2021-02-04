function solution(arr, divisor) {
    var answer = [];
    arr.sort((a, b) => {
        return a - b
    })
    
    arr.map((e) => {
        if (e % divisor == 0 ) answer.push(e)
    })
    
    if (answer.length == 0) {
        answer.push(-1);
    }
    
    return answer;
}