function solution(array, commands) {
    return commands.map(v=>{
    let newArr = [];
    for(let i=v[0]-1;i<=v[1]-1;i++) {
        newArr.push(array[i])
    }
    newArr.sort((a,b)=>a-b)
    return newArr[v[2]-1]
})
}


/*
처음에 splice를 이용해 문제를 풀었는데 splice사용시 원본 배열까지 훼손시키다보니 배열을 복사시켜서 만들었었다.
하지만 조건에 알맞는 부분을 설정하기 위해 해야할 것들이 많아 for문을 이용하면 훨씬 단순하겠다 싶어
for문을 이용해 배열에 집어넣고 sort로 오름차순시켰다.
속도도 for문이 훨씬 빠르고 다른 풀이 보다보니 splice가 아니라 slice를 썼어야 했다!!
좀 더 잘 알아보자

*/