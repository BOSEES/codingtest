function solution(n) {
    let answer = n / 2;
    let count = 1;
    
    while(true) {
        if (answer < count && answer * 2 == count) {
            return (answer * 2 + 1) * (answer * 2 + 1)
        } else if (answer < count && answer * 2 !== count) {
            return -1
        }
        answer -= count
        count++   
    }
}v