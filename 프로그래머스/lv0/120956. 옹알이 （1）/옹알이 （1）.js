function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    var answer = babbling.map(v=>{
        wordtest: for(let i=0; i<=word.length-1; i++) {
            if(v.includes(word[i])) {
                const reg = new RegExp(word[i])
                v = v.replace(reg," ")
                continue wordtest
            }
        }
        return v
    });
    const babblingArr = answer.filter(v=> v===" "||v=== "  "||v=== "   " ||v=== "    ")
    return babblingArr.length;
}