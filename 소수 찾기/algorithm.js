function solution(n) {
    var answer = 0;
    let arr = [];
    let primeNum = [];
    
    for (let i = 0; i <= n; i++) {
        arr.push(true);
    }
    // 	[ true, true, true, true, true, true ]
    //      0     1     2     3     4     5
    for (let i = 2; i <= n; i++) {
        if (arr[i] == false) {
            continue;
        }
        
        primeNum.push(i);
        
        for (let j = i * 2; j <= n; j += i) {
            arr[j] = false;
        }
    }
    // console.log(arr);
    // console.log(primeNum);
    answer = primeNum.length;
    
    return answer;
}