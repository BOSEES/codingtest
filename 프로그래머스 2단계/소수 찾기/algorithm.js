function solution(numbers) {
    const arr = numbers.split("");
    
    // Set 객채를 활용하여 중복값을 제거.
    const answer = new Set();
    
    //첫 호출.
    getNumber(arr, "");
    
    function getNumber(numbersArr, currentNumber) {
            console.log(numbersArr,currentNumber)
            //arr 길이만큼 반복.
            for (let i = 0; i < numbersArr.length; i++) {
                
                //numbersArr를 temp변수에 저장.
                const temp = [...numbersArr];
                
                // temp에서 i번째 값을 하나 제거.
                temp.splice(i, 1);
                //소수 체크 함수.
                if(isPrime(parseInt(currentNumber + numbersArr[i]))) {
                    answer.add(parseInt(currentNumber + numbersArr[i]))
                }
                
                // 재귀로 순서가 바뀐 temp, 현재 수 + 이번에 바뀐 수를 호출.
                getNumber(temp, currentNumber + numbersArr[i])
            }
    }
    
    function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
    
    return answer.size;
}