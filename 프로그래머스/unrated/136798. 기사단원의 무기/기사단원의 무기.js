function solution(number, limit, power) {
    const weapon = [];
    for(let i=1; i<=number; i++){
        weapon.push(measure(i))
    }
    return weapon.reduce((acc,cur)=>{
        if(cur>limit) cur = power
        return acc+cur
    });
}

const measure = num => {
    const divisors = new Set();
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.add(i);
            divisors.add(num / i);
        }
    }
    return divisors.size;
}