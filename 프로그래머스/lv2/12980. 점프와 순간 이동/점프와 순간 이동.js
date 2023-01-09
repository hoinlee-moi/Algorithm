function solution(n){
    let ans = 0;
    while(true){
        if(n%2!==0) {
            n -= 1
            ans++
        }
        n /= 2
        if(n <=0) break;
    }
    return ans;
}

/*
순간이동을 많이 사용해야 하기 때문에 계속해서 2로 나누면 된다.
이때 홀수가 등장하게 될 경우 한칸 이동 해 짝수로 만들어 계산해야되기 때문에 -1을 시켰다

아래는 2진수를 활용한 방법인데 아주 근소한 차이가 있지만 더 빠르고 더 적은 메모리를 사용했다.
어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은
어떠한 수를 이진수로 변환한 수의 1의 개수와 같다는 것을 이용한 것이다

function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    console.log(nArr)
    return nArr.reduce((a,b)=>(+a)+(+b));
}
*/