function solution(priorities, location){
    let answer = 0;
         
    while(true) {
        let maxNum = priorities[0];
        for (let i = 1; i < priorities.length; i++) {
            if (maxNum <= priorities[i]) {
                maxNum = priorities[i];
            }
        }
        
        if (location == 0 && priorities[0] == maxNum){
            priorities.shift();
            answer++;
            break; 
        } else if (priorities[0] == maxNum) {
            priorities.shift();
            answer++;
            location--;
        } else if (priorities[0] !== maxNum && location == 0){
            priorities.push(priorities.shift());
            location = priorities.length - 1;
        } else if (priorities[0] !== maxNum && location !== 0) {
            priorities.push(priorities.shift());
            location--;
        }
    }
    return answer;
}