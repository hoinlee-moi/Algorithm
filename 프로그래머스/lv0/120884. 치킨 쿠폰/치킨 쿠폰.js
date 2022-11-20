function solution(chicken) {
    let coupon = 0;
    let service = 0;
    while(chicken>=10) {
            service += Math.floor(chicken/10)
            coupon = chicken%10
            chicken = Math.floor(chicken/10)+coupon
    }
    
    return service;
}