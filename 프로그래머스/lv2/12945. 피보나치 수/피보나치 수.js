function solution(n) {
    let f0 = BigInt(0)
    let f1 = BigInt(1)
    let fn = BigInt(0)
    for(let i=2; i<=n;i++) {
        fn = f0 + f1
        f0=f1
        f1=fn
    }
    return fn%BigInt(1234567);
}

/*
- 피보나치를 실행할 반복문을 만들고 f2부터 시작하도록 i=2로 설정
- 숫자 크기가 너무 커지다보니 BigInt로 감쌈
*/