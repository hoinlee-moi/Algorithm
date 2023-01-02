function solution(arr) {
    return arr.reduce((acc,cur)=>{
        return lcm(acc,cur)
    });
}

const lcm = (num1,num2) => {
    let gcd = 0
    for(let i=Math.max(num1,num2);i>0;i--){
        if(num1%i===0 && num2%i===0){
            gcd = i
            break;
        }
    }
    return (num1*num2)/gcd
}