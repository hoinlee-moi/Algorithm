function solution(price, money, count) {
    const plusPrice = price
    let cost = 0
    for(let i=1;i<=count;i++) cost += plusPrice*i
    if(cost>money) return cost-money
    else if(cost<=money) return 0
}


/*
수학공식을 이용하면 더 쉽게 풀리는 게 있었다.
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
1 ~ x까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price
*/