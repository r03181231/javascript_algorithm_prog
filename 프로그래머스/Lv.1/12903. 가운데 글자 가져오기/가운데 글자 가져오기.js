function solution(s) {
    var answer = '';
    if ( s.length % 2 === 0){
        //[a,b,c,d] [i-1] [i]
         answer = s[(s.length /2)-1]+s[(s.length/2)]
    }else{
         answer = s[(s.length-1)/2]
    }
    return answer;
}