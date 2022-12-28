function solution(s)
{
    let str = [];
    for(let i=0;i<=s.length-1;i++) {
        str.push(s[i])
        if(str[str.length-1]===str[str.length-2]){
            str.pop()
            str.pop()
        }   
    }
    return str.length===0?1:0
}