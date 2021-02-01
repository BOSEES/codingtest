function solution(s) {
    var answer = '';
    let array = s.split("");
    let center = [];
    
    if (array.length % 2 !== 0) {
        center = array[Math.floor(array.length / 2)];
    } else {
        center = array.slice((array.length / 2) - 1, array.length / 2 + 1).join("");
    }
    answer = center
    return answer;
}