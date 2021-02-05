function solution(n, arr1, arr2) {
    var answer = [];
    let binaryArr1 = [];
    let binaryArr2 = [];
    for (let i = 0; i < n; i++) {
        binaryArr1.push(arr1[i].toString(2));
        binaryArr2.push(arr2[i].toString(2));
    }
    
    for (let i = 0; i < n; i++) {
        while(binaryArr1[i].length !== n) {
            binaryArr1[i] = 0 + binaryArr1[i]
        }
        while(binaryArr2[i].length !== n) {
            binaryArr2[i] = 0 + binaryArr2[i]
        }
    }
    
    for (let i = 0; i < n; i++) {
        let result = ""
        for (let j = 0; j < n; j++) {
            if (binaryArr1[i][j] + binaryArr2[i][j] == 0) {
                result += " "
            } else {
                result += "#"
            }
        }
        answer.push(result)
    }
    return answer;
}