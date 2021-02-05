function solution(d, budget) {
    var answer = 0;
    let sort = d.sort((a, b) => a - b);
    
    for (let i = 0; i < sort.length; i++) {
        if(budget < sort[i]) break
        budget -= sort[i];
        answer++
    }
    return answer;
}