function solution(arr) {
    return arr.filter((v,i,ar)=> v!=ar[i+1]);
}