function solution(s) {
    let arr = [];
    let ss = s.split(" ");    
    console.log(ss)
    for (let i = 0; i < ss.length; i++) {
        let a = "";
        for (let j = 0; j < ss[i].length; j++) {
            if (j % 2 == 0) a += ss[i][j].toUpperCase();
            else a += ss[i][j].toLowerCase();
        }
        arr.push(a)
    }
    return arr.join(" ");
}