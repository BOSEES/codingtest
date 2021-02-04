function solution(s, n) {
    var answer = '';
    const alphabet1 ="abcdefghijklmnopqrstuvwxyz";
    const alphabet2 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    let alphabetArray1 = alphabet1.split("");
    let alphabetArray2 = alphabet2.split("");
    let arr = s.split("");

    for (let i = 0; i < s.length; i++) {
        if (arr[i] == " ") {
            answer += " ";
        } else if (alphabetArray1[alphabetArray1.indexOf(arr[i]) + n] == undefined) {
            answer += alphabetArray1[alphabetArray1.indexOf(arr[i]) - 26 + n] 
        } else if (alphabetArray2[alphabetArray2.indexOf(arr[i]) + n] == undefined) {
            answer += alphabetArray2[alphabetArray2.indexOf(arr[i]) - 26 + n]
        } else if (arr[i] == arr[i].toLowerCase()) {
            answer += alphabetArray1[alphabetArray1.indexOf(arr[i]) + n] 
        } else if (arr[i] == arr[i].toUpperCase()) {
            answer += alphabetArray2[alphabetArray2.indexOf(arr[i]) + n]
        }
    }
    return answer;
}