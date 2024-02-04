function solution(n, k) {
    return Array.from({length:~~(n/k)},(_,i)=>(i+1)*k);
}