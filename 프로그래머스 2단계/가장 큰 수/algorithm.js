function solution(numbers) {
    let result = [];
    let answer = "";
    
    for (let i = 0; i < numbers.length; i++) {
        let a = numbers[i].toString(10);
        let b = "";
        
        for (let j = 0; j < 4; j++) {
            b += numbers[i]
            if (b.length > 4){
               b = b.substring(0,4)
            }
        }
        result.push([a, b]);
    }
    result.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < result.length; i++) {
        if (answer !== "0") answer += result[i][0]
    }
    
    return answer
}