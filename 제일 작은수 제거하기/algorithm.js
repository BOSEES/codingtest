function solution(arr) {
    var answer = [];
    const minNum = Math.min.apply(null,arr);
    const indexNum = arr.indexOf(minNum);
    
    if (arr.length == 1) {
        answer.push(-1);
        return answer;
    } else {
        arr.splice(indexNum, 1)
        return arr;
    }
}