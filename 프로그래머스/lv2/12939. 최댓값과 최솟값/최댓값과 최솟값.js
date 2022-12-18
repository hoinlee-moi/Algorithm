function solution(s) {
    const arr = s.split(" ").map(v=>+v)
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}