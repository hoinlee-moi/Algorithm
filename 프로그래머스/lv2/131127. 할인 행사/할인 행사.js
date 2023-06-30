function solution(want, number, discount) {
    let answer = 0;
    for(let i=0; i<=discount.length-1; i++) {
        if(i+10>discount.length) break;
        let result = false
        let list =  discount.slice(i,i+10)
        for(let j=0; j<=number.length-1; j++) {
            let count = list.filter(v=> v===want[j]).length
            if(count!==number[j]) break;
            if(j===number.length-1) result=true
        }
        if(result) {
            answer ++
        }
    }
    return answer;
}