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
/*
function solution(answers) {
    var answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
}
*/