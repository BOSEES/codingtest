function solution(s){
    let arr = s.split("");
    let countP = 0;
    let countY = 0;
    
    arr.map(e => {
        if (e == "p" || e == "P") countP++;
        else if (e == "y" || e == "Y") countY++;
    })
    
    if (countP == countY) return true
    else return false
    
    return true
}