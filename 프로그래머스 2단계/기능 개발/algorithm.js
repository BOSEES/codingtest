function solution(progresses, speeds) {
    var answer = [];
    let progresses1 = progresses;

    while (progresses1.length !== 0) {
        let count = 0;

        while (true) {
            if (progresses1[0] >= 100) {
                progresses1.shift();
                speeds.shift();
                count++;
            } else {
                break;
            }
        }
        for (let i = 0; i < progresses1.length; i++) {
            progresses1[i] += speeds[i];
        }
        if (count !== 0){
            answer.push(count);
        }
    }
    return answer;
}