function solution(x) {
    let sum = 0;
    const arr = x.toString().split("").map((e) => sum += parseInt(e, 10))
    return x % sum == 0? true : false 
}