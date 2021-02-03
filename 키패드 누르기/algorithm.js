function solution(numbers, hand) {
    var answer = '';
    let leftThum = [3, 0];
    let rightThum = [3, 2];
    
    let position = {
        1 : [0, 0],2 : [0, 1],3 : [0, 2],
        4 : [1, 0],5 : [1, 1],6 : [1, 2],
        7 : [2, 0],8 : [2, 1],9 : [2, 2],
        0 : [3, 1]
    }
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 1 ||numbers[i] == 4 ||numbers[i] == 7) {
            answer += "L";
            leftThum = position[numbers[i]];
        } else if (numbers[i] == 3 ||numbers[i] == 6 ||numbers[i] == 9) {
            answer += "R";
            rightThum = position[numbers[i]];
        } else if (numbers[i] == 0 || numbers[i] == 2 || numbers[i] == 5 || numbers[i] == 8) {
            let R = Math.abs(position[numbers[i]][0] - rightThum[0])
                + Math.abs(position[numbers[i]][1] - rightThum[1])
            let L = Math.abs(position[numbers[i]][0] - leftThum[0])
                + Math.abs(position[numbers[i]][1] - leftThum[1])
            if (L < R) {
                answer += "L";
                leftThum = position[numbers[i]];
            } else if (L > R) {
                answer += "R";
                rightThum = position[numbers[i]];
            } else if (L == R) {
                if (hand == "right") {
                    answer += "R";
                    rightThum = position[numbers[i]];
                } else if (hand == "left") {
                    answer += "L";
                    leftThum = position[numbers[i]];
                }
            }
        }
    }
    return answer;
}