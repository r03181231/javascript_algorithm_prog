function solution(x) {
  let sum = 0;
  let arr = String(x)
    .split("");
  for(let i = 0; i < arr.length ; i++){
     sum += Number(arr[i])
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
  //만약 하샤드의 수면 true
  //아니면 return false
}