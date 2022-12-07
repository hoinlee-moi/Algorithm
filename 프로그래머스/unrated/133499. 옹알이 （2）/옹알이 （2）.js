function solution(babbling) {
    let answer = 0;
    const babble = ["aya", "ye", "woo", "ma"]
    babbling.forEach(v=>{
        for(let i=0;i<=babble.length-1;i++){
            let regExp = new RegExp(`(${babble[i]}){2}`)
            if(!v.includes(babble[i])) continue;
            if(v.match(regExp)!==null) break;
            else{
                v=v.replaceAll(babble[i],"0")
                if(Number(v)===0) break;
            }
        }
        if(Number(v)===0) answer++
    })
    return answer
}