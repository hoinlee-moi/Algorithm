function solution(price) {
    let answer=price;
    if( price>=100000 && price<300000) answer = price-(0.05*price)
    if(price>=300000 && price<500000 ) answer = price-(0.1*price)
    if(price>=500000) answer = price-(0.2*price)
    return parseInt(answer);
}