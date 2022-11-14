function solution(arr) {
    return arr.filter((v,i,ar)=> v!=ar[i+1]);
}

/*
처음엔 map으로 사용해 봤는데 생각해보면 filter또한 각 원소마다 주어진 조건이 일치한지 확인하고 걸러주는 것이기에
사용할 수 있다고 판단, 사용해 보니 값이 도출 되었습니다.
*/