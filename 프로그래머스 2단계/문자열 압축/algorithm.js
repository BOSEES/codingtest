function chunk(arr, size) {
    let temparray = [] 
    for (let i = 0; i < arr.length; i += size) {
        temparray.push(arr.slice(i,i + size).join(""))
    }
    return temparray;
}

function solution(s) {
    let answer = 1000;
    let ss = s.split("");
    
    for (let i = 1; i < s.length / 2 + 1; i++) {
        let count = 1;
        let a = [];
        
        for (let j = 0; j < chunk(ss,i).length; j++) {  
            if (chunk(ss,i)[j] == chunk(ss,i)[j + 1] ) {
                count++
            } else if (chunk(ss,i)[j] !== chunk(ss,i)[j + 1] && count == 1) {
                a.push(chunk(ss,i)[j])
            } else {
                a.push(count + chunk(ss,i)[j])
                count = 1;
            }
        }
        
        
        if (answer > a.join("").length) {
            answer = a.join("").length;
        }
    }
    
    return answer;
}