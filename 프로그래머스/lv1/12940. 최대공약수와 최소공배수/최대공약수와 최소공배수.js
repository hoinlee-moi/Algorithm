function solution(n, m) {
    let G = 0;
    for(let i=1; i<=Math.max(n,m);i++) {
        if(n%i===0&&m%i===0) G = i;
    }
    let L = G*(n/G)*(m/G)
    return [G,L];
}

/*
나는 최대 공약수를 만드는 for문을 만들고 최소 공배수를 구하는 공식(각 수를 최대 공약수로 나눈 후의 값들과 최대 공약수를 곲한다.)
을 이용했는데 
다른사람 문제 풀이에 상상도 못한 알고리즘이 나왔다.
똑같이 반복문을 이용한 것인데
계속해서 진행하다 보면 r=0이 된 순간 다음 반복문은 나올 수 없어 종료되며 return값으로 최대공약수와
최소 공배수가 들어오게 된다.
function solution(a, b) {
    let r;
    for(let ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
*/