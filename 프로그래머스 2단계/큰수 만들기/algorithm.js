function solution(number, k) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < number.length; i++) {     
        while(arr[arr.length - 1] < number[i] && count !== k){
            arr.pop()
            count++
        }
        arr.push(number[i])
    }
    if (count < k) {
        for (let i = 0; i < k - count; i++) {
            arr.pop();
        }
    }
    return arr.join("");
}