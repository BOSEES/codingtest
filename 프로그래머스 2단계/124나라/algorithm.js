function solution(n) {
    var answer = '';
    let count = n;
    let arr = [];
    
    while (true) {
        if (count == 0 || count == 1 || count == 2) {
            arr.push(count);
            break;
        } else if (count == 3) {
            arr.push(4);
            break
        } else if ( count % 3 == 2) {
            count = Math.floor(count / 3);
            arr.push(2);
        } else if ( count % 3 == 0) {
            count = Math.floor(count / 3 - 1 );
            arr.push(4);
        } else if (count % 3 == 1) {
            count = Math.floor(count / 3);
            arr.push(1)
        }
    }
    answer = arr.reverse().join("");
    
    return answer;
}