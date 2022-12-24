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