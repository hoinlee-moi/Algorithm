function solution(price, money, count) {
    const plusPrice = price
    let cost = 0
    for(let i=1;i<=count;i++) cost += plusPrice*i
    if(cost>money) return cost-money
    else if(cost<=money) return 0
}