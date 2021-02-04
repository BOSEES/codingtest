function solution(phone_number) {
    let arrNum = phone_number.split("");
    for(let i = 0; i < arrNum.length ; ++i) {
        if (i < arrNum.length - 4) {
            arrNum[i] = "*"
        }
    }
    return arrNum.join("");
}