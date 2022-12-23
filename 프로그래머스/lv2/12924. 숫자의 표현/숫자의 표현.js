function solution(n) {
    if(n===1) return 1
    let answer = 1;
    let num = 1;
    let sumArr = [];
    while(num<=Math.ceil(n/2)+1) {
        let sum = sumArr.reduce((acc,cur)=>{return acc+cur},0)
        if(sum>n) {
            while(sum>n){
                let a =sumArr.shift()
                sum -= a
            } 
        }
        if(sum<n) {
            sumArr.push(num)
            num++
        }
        if(sum===n){
            answer++
            sumArr.push(num)
            num++
        }
    }
    return answer;
}

/*
- 먼저 1일때는 1개뿐이니 바로 처리될 수 있도록 `if`문을 적었고 이후부터 계산되도록 만들었다
- 카운트를 해줄 변수 `answer`를 만들고 반복을 돌아줄 `i`와 같은 변수 `num`을 선언, 합을 구해줄 배열 `sumArr`를 선언한다.(`answer`가 1인 이유는 자기 자신은 무조건 포함이기 때문)
- `while`문을 통해 계속 반복할 예정인데 굳이 `while`을 안쓰고 `for`를 써도 될 것 같다. (이전에 `shift`부분도 전체 `while`문에서 처리하도록 만들었는데 시간적 소요가 커서 따로 작동되도록 빼니 시간 소모도 줄었고 훨씬 좋아졌다.)
- `while`의 조건은 `n`의 절반+1보다 연속되지 않기 때문에 조건을 걸어놓고 `sumArr`의 합이 `n`보다 커질때는 sumArr에서 작은수를 빼고 작을때는 현재의 `num`을 넣도록 했다.

아래는 `for`문을 통한 작성이다. 하지만 시간이나 메모리는 `while`문이 더 빠르고 적었다.
for문이 36.8 시간 3.84
while이 33.7 시간 1.25


function solution(n) {
    if(n===1) return 1
    let answer = 1;
    let sumArr = [];
    for(let i=1; i<=Math.ceil(n/2)+1;i++){
        let sum = sumArr.reduce((acc,cur)=>{return acc+cur},0)
        if(sum>n) {
            while(sum>n) sum -= sumArr.shift()
        }
        if(sum<n) {
            sumArr.push(i)
        }
        if(sum===n){
            answer++
            sumArr.push(i)
        }
    }
    return answer;
}
/*
