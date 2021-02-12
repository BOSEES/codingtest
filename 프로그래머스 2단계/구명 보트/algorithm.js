function solution(people, limit) {
  var answer = 0;
  let sort = people.sort((a,b) => a - b);
  let leftIdx = 0;
  let rightIdx = people.length - 1;
  
  while(leftIdx < rightIdx) {
      let sum = sort[leftIdx] + sort[rightIdx];
      
      if (sum > limit) {
          rightIdx--;
      } else {
          rightIdx--;
          leftIdx++;
      }
      answer++
  }
  
  if(leftIdx == rightIdx) answer++;
  return answer;
}