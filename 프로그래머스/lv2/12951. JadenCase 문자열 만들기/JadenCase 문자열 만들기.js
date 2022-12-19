function solution(s) {
    var answer = s.split(" ").map(v=>{
        let word = ''
        for(let i=0; i<=v.length-1;i++){
            if(i===0)word += v[0].toUpperCase()
            if(v[i]!=" "&&i!=0)word += v[i].toLowerCase()
        }
        return word
    });
    return answer.join(" ");
}