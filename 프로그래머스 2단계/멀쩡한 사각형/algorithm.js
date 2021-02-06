function solution(w, h) {
    var answer = 1;
    let gcd = 1;

    for (let i = 2; i <= Math.min(w, h); i++) {
        if(w % i === 0 && h % i === 0){
            gcd = i;
        }
    }
    96
    if (w == h) {
        // x = w * h - 최대공약수;
        answer = w * h - gcd;
    }

    if (w !== h) {
        // x = w * h - 최대공약수 x 4(정사각형이 아닐경우 무조건 반복되는 블럭의 갯수는 항상 4개이다.)
        answer = w * h - w - h + gcd;
    }

    return answer;
}