function solution(numbers) {
    var answer = [];
    while(numbers.length !=0){
        const standardNum = numbers.shift()
        for(let i=0; i<numbers.length; i++) {
            const calculate = numbers[i]+standardNum
            if(!answer.includes(calculate)) answer.push(calculate)
        }
    }
    return answer.sort((a,b)=>a-b);
}