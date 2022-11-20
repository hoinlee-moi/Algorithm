function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];;
    for(let i=0; i<a-1; i++) b += month[i] 
    return b%7!=0?day[b%7-1]:"THU";
}