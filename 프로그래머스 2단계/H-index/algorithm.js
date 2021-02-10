function solution(citations) {
    let citationSort = citations.sort((a ,b) => b - a);
    let lengthArr = citationSort.length;
    
    while (true) {
        let count = 0;
        for (let i = 0; i < citationSort.length; i++){
            if (lengthArr <= citationSort[i]) count++
        }
        
        if (count >= lengthArr) {
               return lengthArr;    
        }
        lengthArr--;
    }
}