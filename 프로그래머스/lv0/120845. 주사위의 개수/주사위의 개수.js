function solution(box, n) {
    return box.map(v=>parseInt(v/n)).reduce((a,v) => a*v);
}