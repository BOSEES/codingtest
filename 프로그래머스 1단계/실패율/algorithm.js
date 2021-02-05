function solution(N, stages) {
    let userAll = stages.length;
    let stage = {};
    
    for (let i = 1; i <= N; i++) {
        let count = 0;
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] == i) {
                count++
            }
        }
        
        if (count == 0) {
            stage[i] = 0
        } else {
            stage[i] = count / userAll
            userAll -= count;
        }
    }
    console.log(stage)
    let keysSorted = Object.keys(stage).sort((a,b) => {
        if (stage[a] > stage[b]) return 1
        if (stage[a] === stage[b]) return -1
        if (stage[a] < stage[b]) return -1
    }).reverse();
    
    return keysSorted.map((e) => parseInt(e, 10));
}