function solution(x) {
    const xSum = (x+"").split("").reduce((acc,cur) => +acc+ +cur);
    return x%xSum===0;
}