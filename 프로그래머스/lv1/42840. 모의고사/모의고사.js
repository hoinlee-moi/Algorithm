function solution(answers) {
    const A = "12345".repeat(8)
    const B = "21232425".repeat(5)
    const C = "3311224455".repeat(4)
    let answer = [0,0,0];
    while(true){
        let arr;
        if(answers.length>=40) arr= answers.splice(0,40)
        else arr=answers
        for(let i=0; i<arr.length;i++){
            if(arr[i]===+A[i])answer[0]++
            if(arr[i]===+B[i])answer[1]++
            if(arr[i]===+C[i])answer[2]++
        }
        if(arr.length<40)break;
    }
    
    return answer.map((v,i)=>Math.max(...answer)===v? i+1 : null).filter(v=>v!=null)
}