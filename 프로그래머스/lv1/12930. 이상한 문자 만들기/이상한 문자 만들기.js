function solution(s) {
    const answer = s.split(" ").map(v=> {
        let newWord = ""
        for(let i=0; i<v.length;i++){
            if(i===0 || i%2===0)  newWord += v[i].toUpperCase()
            else  newWord += v[i].toLowerCase() 
        } 
        return newWord
    });
    return answer.join(" ");
}
/*
나는 먼저 split을 통해 단어별로 나눈 배열을 만든 뒤 map을 사용하여 단어 하나마다 접근 하였고 그 단어를 다시 for문으로 돌아 짝수와 홀수를 새 단어로 교체하도록 만들었다. 더 좋게 만들 수 있을 것 같아서 다른 사람 코드를 찾아보니 또 정규식을 활용한 코드가 나왔다.

function solution(s){
  return s.toUpperCase().replace(/(\w)(\w)/g,swtich)
}
function swtich(a){
    return a[0].toUpperCase()+a[1].toLowerCase();
}
*/
