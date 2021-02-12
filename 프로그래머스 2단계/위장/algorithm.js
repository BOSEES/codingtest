function solution(clothes) {
  var answer = 1;
  const count = {};
  
  for(let i = 0; i < clothes.length; i++) {
      if(count[clothes[i][1]]) {
          count[clothes[i][1]]++;
      } else {
          count[clothes[i][1]] = 1;
      }
  }
  
  for (let a in count) {
      answer = answer * (count[a] + 1);
  }
  return answer - 1;
}