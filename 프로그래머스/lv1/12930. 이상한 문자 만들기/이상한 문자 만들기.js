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