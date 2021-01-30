function solution(new_id) {
    let literal = /^[a-z0-9._-]$/;
    let stepTwo = [];
    let stepThree = [];
    
    //1단계 - 소문자로 바꾸기
    let stepOne = new_id.toLowerCase().split("");
    
    //2단계 - 정규표현식(리터럴) 사용하여 걸러내기.
    stepOne.filter((e) => {
        if (literal.test(e)) {
            stepTwo.push(e)
        }
    })
    
    //3단계 - 마침표(.) 중복되는것 걸러내기.
    for (let i = 0; i < stepTwo.length; i++) {
        if (stepTwo[i] == "." ) {
            if (stepTwo[i] == stepTwo[i + 1]) {
                continue;   
            }
        }
        stepThree.push(stepTwo[i])   
    }
    console.log(stepThree)
    //4단계 - 마침표(.)가 처음이나 끝에 위치한다면 제거하기.
    if (stepThree[0] == ".") {
        stepThree.shift();
    }
    if (stepThree[stepThree.length - 1] == ".") {
        stepThree.pop();
    }
    
    //5단계 - 빈 문자열이라면, new_id에 "a"를 대입하기.
    if (stepThree.length == 0) {
        stepThree.push("a")
    } else {
        for (let i = 0; i < stepThree.length; i++) {
            if (stepThree[i] == " " || stepThree[i] == undefined) {
                stepThree.push("a")
            }
        }
    }
    
    //6단계 - 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거
    while(stepThree.length > 15) {
        stepThree.pop();
        if (stepThree[stepThree.length - 1] == ".") {
            stepThree.pop();
        }
    }
    
    //7단계 - new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
    while(stepThree.length < 3) {
        stepThree.push(stepThree[stepThree.length - 1])
    } 
    
    //마지막 - 배열의 형태를 join() 메소드를 사용하여 string 으로 변경
    return stepThree.join("");
}